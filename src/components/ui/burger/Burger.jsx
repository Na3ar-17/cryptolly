const Burger = ({ isOpen = false, setIsOpen }) => {
	return (
		<div className='md:block hidden' onClick={setIsOpen}>
			<img
				src={
					isOpen ? '/public/icons/burger-close.png' : '/public/icons/burger.png'
				}
				alt={isOpen ? 'burger-close.png' : 'burger.png'}
			/>
		</div>
	)
}

export default Burger
