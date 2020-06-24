const reveal = gsap.utils.toArray('.reveal')
reveal.forEach(text => {
	ScrollTrigger.create({
		trigger: text,
		toggleClass: 'active',
		start: 'top 90%',
		end: 'top 10%',
		markers: true
	})
})

const images = gsap.utils.toArray('img')
images.forEach(img => {
	ScrollTrigger.create({
		trigger: img,
		toggleClass: 'active',
		start: 'top 90%',
		end: 'top 10%'
	})
})