import footerImage from '../../assets/footer.png';
import footerImage1 from '../../assets/security.jpg';
export default function Footer() {
    return (
        <>
        <footer>
          <img
            src={footerImage1.src}
            style={{ marginLeft: "-8px", color: "#535353" }}
            width="104.5%"
          />
          <img src={footerImage.src} style={{ marginTop: "-6%" }} width="100%" />
        </footer>          
        </>
          )
  }