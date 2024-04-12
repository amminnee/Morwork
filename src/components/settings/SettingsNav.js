import NavItem from "../navigation/NavItem";


export default function SettingsNav(props) {
    
    return (
        <div>
            <div className={`navbar radius elevation-1 ${props.isScrolling && "scroll"}`}>
                <NavItem
                    url="/settings/profile"
                    text="Profile info"
                    line="iconamoon:profile"
                    fill="iconamoon:profile-fill"
                />
                
            </div>
        </div>
        
    )
}