import React, {Component} from 'react'

// Router
import {Link} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

export default class NavBar extends Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        const {location} = window
        //window.location
        const {pathname} = location
        //window.location.pathname
        //console.log(window.location)
        return (
            <section>
                <div className="container">
                    <div>
                        <Navbar color="#f2f4f7" light expand="md">
                            <Link className="navbar-brand" to="/">
                                {/*<img*/}
                                {/*src={require('../../assets/images/logi.png')}*/}
                                {/*className="img-fluid"*/}
                                {/*/>*/}
                            </Link>
                            <NavbarToggler onClick={this.toggle}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/" className={pathname === '/' && 'active'}>
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="/about"
                                            className={pathname === '/about-us' && 'active'}
                                        >
                                            {' '}
                                            About Us
                                        </NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/all-property"
                                                    className={pathname === '/all-property' && 'active'}
                                                >
                                                    All Property
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/amarene"
                                                    className={
                                                        pathname === '/property/amarene' && 'active'
                                                    }
                                                >
                                                    Amarene
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/forest-ville"
                                                    className={
                                                        pathname === '/property/forest-ville' && 'active'
                                                    }
                                                >
                                                    Forest Ville
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/imperial-grande"
                                                    className={
                                                        pathname === '/property/imperial-grande' && 'active'
                                                    }
                                                >
                                                    Imperial Grande
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/one-foresta"
                                                    className={
                                                        pathname === '/property/one-foresta' && 'active'
                                                    }
                                                >
                                                    One Foresta
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/queens-water-front-1"
                                                    className={
                                                        pathname === '/property/queens-water-front-1' &&
                                                        'active'
                                                    }
                                                >
                                                    Queens Water Front 1
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/queens-water-front-2"
                                                    className={
                                                        pathname === '/property/queens-water-front-2' &&
                                                        'active'
                                                    }
                                                >
                                                    Queens Water Front 2
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/santorini"
                                                    className={
                                                        pathname === '/property/santorini' && 'active'
                                                    }
                                                >
                                                    Santorini
                                                </NavLink>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavLink
                                                    href="/property/summer-skye"
                                                    className={
                                                        pathname === '/property/summer-skye' && 'active'
                                                    }
                                                >
                                                    Summer Skye
                                                </NavLink>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            href="/contact"
                                            className={pathname === '/contact' && 'active'}
                                        >
                                            {' '}
                                            Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                    {/*<nav className="navbar navbar-expand-md navbar-dark hidden-sm">
            <Link className="navbar-brand" to="/">
              <img
                src={require('../../assets/images/logi.png')}
                className="img-fluid"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item  dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/property"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Property
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="/all-property">
                      All Property
                    </Link>
                    <Link className="dropdown-item" to="/property/amarene">
                      Amarene
                    </Link>
                    <Link className="dropdown-item" to="/property/forest-ville">
                      Forest Ville
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/property/imperial-grande"
                    >
                      Imperial Grande
                    </Link>
                    <Link className="dropdown-item" to="/property/one-foresta">
                      One Foresta
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/property/queens-water-front-1"
                    >
                      Queens Water Front 1
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/property/queens-water-front-2"
                    >
                      Queens Water Front 2
                    </Link>
                    <Link className="dropdown-item" to="/property/santorini">
                      Santorini
                    </Link>
                    <Link className="dropdown-item" to="/property/summer-skye">
                      Summer Skye
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="row">
            <div className="col-5 col-sm-4 visible-sm hidden-menu cls-logo-img">
              <Link to="/">
                <img
                  src={require('../../assets/images/logo.png')}
                  className="img-fluid"
                />
              </Link>
            </div>

            <div className="col-7 col-sm-8 visible-sm hidden-menu">
              <div id="sidebarCollapse" className="navbar-btn">
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>*/}
                </div>
            </section>
        )
    }
}
