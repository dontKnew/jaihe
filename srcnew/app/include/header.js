import logo from '../../assets/yono.png';
import Menu from '../../assets/Menu.png';
export default function Header() {
    return (
        <>
        <div className="container-fluid m-0 p-0">
            <img
                src={logo.src}
                style={{ marginTop: "-2%", marginLeft: "-8px" }}
                width="105.5%"
            />
            <img src={Menu.src} id="ii" width="10%" />
            </div>

      </>
          )
  }