// Write your code here

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => {
  const darkThemeView = () => (
    <div>
      <p>praveen</p>
    </div>
  )
  const lightThemeView = () => (
    <div>
      <p>praveen</p>
    </div>
  )
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        isDarkTheme ? darkThemeView() : lightThemeView()
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar
