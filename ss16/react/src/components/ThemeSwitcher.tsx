import React, { Component } from 'react'
import './ThemeSwitcher.css';
export default class ThemeSwitcher extends Component<object, { isDarkMode: boolean }> {
  state = {
    isDarkMode: false
  };

  handleToggle = () => {
    this.setState(prev => ({ isDarkMode: !prev.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
      return (
        <div className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}>
          <button onClick={this.handleToggle}>Chuyen theme</button>
          <div style={{ marginTop: 16 }}>
            {isDarkMode ? 'Che do Toi dang bat' : 'Che do Sang dang bat'}
          </div>
        </div>
      );
  }
}
