import { connect } from 'react-redux'
import 'components/header/header.css'
import { AppBar, AppTitle, LayoutSpacer } from 'mdl/layout'
import { Navigation, NavigationItem } from 'mdl/layout/navigation'
import { LinkButton } from 'mdl/button'
import Badge from 'mdl/badge'
import Icon from 'mdl/icon'
import { DO_LOGOUT } from 'store/reducers'

const stateToProps = (state) => ({
    logged: state.isLogged
})

const dispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: DO_LOGOUT })
})

const Header = React.createClass({
    onLogout(ev) {
        ev.preventDefault()
        this.props.doLogout()
    },
    
    getNavigation() {
        return (
            <Navigation>
                <NavigationItem>
                    <Badge value='2'><Icon value='mdi-comment' /></Badge>
                </NavigationItem>
                <NavigationItem onClick={this.onLogout}>Sair</NavigationItem>
            </Navigation>
        )
    },
    
    render() {
        return (
            <AppBar>
                <AppTitle value='Meetup React/Redux' />
                <LayoutSpacer />
                {this.props.logged ? this.getNavigation() : null}
            </AppBar>
        )
    }
})

export default connect(stateToProps, dispatchToProps)(Header)
