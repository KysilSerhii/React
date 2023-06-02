import '../../assets/style/Header.scss'
import MainLogo from '../../elements/MainLogo'
import Button from '../../elements/Button'


function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__block">
				<div className="header__logo">
					<MainLogo/>
				</div>
				<p className='header__text'>Blog name</p>
				<div className='header__button-content'>
					<Button>
						
					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
					<Button>

					</Button>
				</div>
				</div>
			</div>
		</header>
	)
}

export default Header