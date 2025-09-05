(() => {
	const doc = document;
	const root = doc.documentElement;
	const resultsEl = doc.getElementById('results');
	const sortEl = doc.getElementById('sortBy');
	const chips = Array.from(doc.querySelectorAll('.chip'));
	const form = doc.getElementById('searchForm');
	const themeToggle = doc.getElementById('themeToggle');
	const ctas = ['ctaTop', 'ctaMap', 'ctaFooter'].map(id => doc.getElementById(id));

	const modal = doc.getElementById('modal');
	const bookingForm = doc.getElementById('bookingForm');
	const closeEls = Array.from(doc.querySelectorAll('[data-close]'));

	const sampleSpots = [
		{ id: 'A12', name: 'Central Plaza Garage', tags: ['covered'], rating: 4.8, distanceKm: 0.4, price: 2.5 },
		{ id: 'B04', name: 'Riverside Lot', tags: ['ev'], rating: 4.5, distanceKm: 1.2, price: 1.5 },
		{ id: 'C22', name: 'Stadium North Deck', tags: ['valet','covered'], rating: 4.7, distanceKm: 0.9, price: 3.0 },
		{ id: 'D19', name: 'Market Street Parking', tags: [], rating: 4.2, distanceKm: 0.6, price: 1.2 },
		{ id: 'E33', name: 'Harborfront Garage', tags: ['covered','ev'], rating: 4.9, distanceKm: 2.1, price: 3.6 },
		{ id: 'F08', name: 'Hilltop Lot', tags: [], rating: 4.0, distanceKm: 2.8, price: 0.9 }
	];

	let state = {
		query: '',
		date: '',
		time: '',
		duration: '4',
		filter: 'all',
		sortBy: 'best'
	};

	function loadTheme() {
		const saved = localStorage.getItem('theme');
		if (saved === 'light') root.classList.add('light');
	}

	function toggleTheme() {
		root.classList.toggle('light');
		localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
	}

	function saveBookings(bookings) {
		localStorage.setItem('bookings', JSON.stringify(bookings));
	}
	function loadBookings() {
		try { return JSON.parse(localStorage.getItem('bookings') || '[]'); } catch { return []; }
	}

	function filterAndSort(spots) {
		let arr = spots.filter(s => state.filter === 'all' ? true : s.tags.includes(state.filter));
		if (state.query) arr = arr.filter(s => s.name.toLowerCase().includes(state.query.toLowerCase()));
		switch (state.sortBy) {
			case 'price-asc': arr.sort((a,b) => a.price - b.price); break;
			case 'price-desc': arr.sort((a,b) => b.price - a.price); break;
			case 'rating': arr.sort((a,b) => b.rating - a.rating); break;
			case 'distance': arr.sort((a,b) => a.distanceKm - b.distanceKm); break;
			default: arr.sort((a,b) => (b.rating - a.rating) || (a.price - b.price));
		}
		return arr;
	}

	function renderSlots() {
		const items = filterAndSort(sampleSpots);
		resultsEl.innerHTML = items.map(s => {
			const tagBadges = s.tags.map(t => `<span class="tag">${t}</span>`).join('');
			return `
				<article class="slot card" role="listitem" aria-labelledby="slot-${s.id}">
					<div class="slot-thumb" aria-hidden="true"></div>
					<div>
						<h3 id="slot-${s.id}">${s.name}</h3>
						<div class="meta">${s.distanceKm} km • ⭐ ${s.rating}</div>
						<div class="tags">${tagBadges}</div>
						<div class="slot-actions">
							<div class="price">$${s.price}/hr</div>
							<button class="btn" data-view="${s.id}">Details</button>
							<button class="btn primary" data-book="${s.id}">Book</button>
						</div>
					</div>
				</article>`;
		}).join('');
	}

	function openModal(slotId) {
		modal.hidden = false;
		modal.querySelector('#slotId').value = slotId;
		const firstInput = modal.querySelector('input, button');
		firstInput && firstInput.focus();
	}
	function closeModal() {
		modal.hidden = true;
	}

	function onSubmitBooking(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(bookingForm).entries());
		if (!data.name || !data.email || !data.vehicle || !data.plate) return;
		const bookings = loadBookings();
		bookings.push({
			...data,
			createdAt: new Date().toISOString(),
			search: { ...state }
		});
		saveBookings(bookings);
		closeModal();
		alert('Booking confirmed! A confirmation was saved locally.');
	}

	// Events
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		state.query = form.q.value.trim();
		state.date = form.date.value;
		state.time = form.time.value;
		state.duration = form.duration.value;
		renderSlots();
	});
	chips.forEach(chip => chip.addEventListener('click', () => {
		chips.forEach(c => c.classList.remove('is-active'));
		chip.classList.add('is-active');
		state.filter = chip.dataset.filter;
		renderSlots();
	}));
	sortEl.addEventListener('change', () => { state.sortBy = sortEl.value; renderSlots(); });
	resultsEl.addEventListener('click', (e) => {
		const bookId = e.target.closest('button')?.dataset?.book;
		if (bookId) { openModal(bookId); return; }
	});
	closeEls.forEach(el => el.addEventListener('click', closeModal));
	modal.addEventListener('click', (e) => { if (e.target.classList.contains('modal-backdrop')) closeModal(); });
	bookingForm.addEventListener('submit', onSubmitBooking);

	themeToggle.addEventListener('click', () => {
		themeToggle.setAttribute('aria-pressed', themeToggle.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
		toggleTheme();
	});
	ctas.forEach(btn => btn && btn.addEventListener('click', () => {
		const firstBook = resultsEl.querySelector('[data-book]');
		if (firstBook) firstBook.click();
	}));

	// Init
	loadTheme();
	renderSlots();
})();



