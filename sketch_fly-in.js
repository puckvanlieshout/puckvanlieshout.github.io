document.addEventListener("DOMContentLoaded", () => {
	const flyInElements = document.querySelectorAll('.fly-in');

	if (flyInElements.length === 0) {
		console.warn('No elements found with the class "fly-in".');
		return; // Exit if no elements are found
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible'); // Add class when in view
			} else {
				entry.target.classList.remove('visible'); // Add class when in view
			}
		});
	});

	flyInElements.forEach(element => {
		observer.observe(element); // Start observing each element
	});
});