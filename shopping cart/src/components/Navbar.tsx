import { Button, Container, Nav, Navbar as NavbarBS} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <NavbarBS sticky="top"  className="shadow p-3 mb-5 bg-white rounded">
        <Container>
            <Nav className="me-auto">
                <Nav.Link  to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link  to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link  to="/store" as={NavLink}>Store</Nav.Link>
            </Nav>
            <Button style={{   
                width: "3.5rem", 
                height: "3.5rem", 
                position: "relative", 
                background: "none", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                border: "none"
            }} >
                <svg fill=" #007aff" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-23.47 -23.47 516.27 516.27" xmlSpace="preserve" stroke=" #007aff" stroke-width="4.6933300000000004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M381.206,216.8c-2.016-2.208-4.875-3.467-7.872-3.467h-42.667h-320c-2.997,0-5.856,1.259-7.872,3.477 c-2.016,2.208-3.019,5.173-2.752,8.16l19.573,215.275c1.504,16.576,15.211,29.088,31.861,29.088h257.856h23.189 c16.661,0,30.357-12.512,31.861-29.109l19.573-215.264C384.224,221.973,383.232,219.019,381.206,216.8z M299.595,448H51.478 c-5.547,0-10.112-4.171-10.613-9.696L22.347,234.667h296.64L299.595,448z M343.136,438.293c-0.501,5.536-5.067,9.707-10.613,9.707 h-11.509l19.392-213.333h21.248L343.136,438.293z"></path> </g> </g> <g> <g> <circle cx="128" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="170.667" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <circle cx="213.334" cy="394.667" r="10.667"></circle> </g> </g> <g> <g> <path d="M245.334,256c-5.899,0-10.667,4.779-10.667,10.667c0,35.296-28.704,64-64,64s-64-28.704-64-64 c0-5.888-4.768-10.667-10.667-10.667c-5.899,0-10.667,4.779-10.667,10.667c0,47.051,38.283,85.333,85.333,85.333 S256,313.717,256,266.667C256,260.779,251.232,256,245.334,256z"></path> </g> </g> <g> <g> <path d="M469.312,415.339L447.979,74.005C447.627,68.384,442.966,64,437.334,64h-32c0-35.296-28.704-64-64-64 c-11.659,0-22.571,3.189-32,8.661C299.904,3.189,288.992,0,277.334,0c-35.296,0-64,28.704-64,64H160 c-5.632,0-10.293,4.384-10.645,10.005l-6.667,106.667c-0.363,5.877,4.107,10.944,9.973,11.307 c5.76,0.363,10.944-4.096,11.317-9.973l6.037-96.672h43.317v21.333c0,5.888,4.768,10.667,10.667,10.667 c5.899,0,10.667-4.779,10.667-10.667V85.333H320v21.333c0,5.888,4.768,10.667,10.667,10.667s10.667-4.779,10.667-10.667V85.333 h43.307l20,320h-9.973c-5.899,0-10.667,4.779-10.667,10.667c0,5.888,4.768,10.667,10.667,10.667H416h42.667 c2.944,0,5.76-1.216,7.765-3.36C468.459,421.163,469.494,418.272,469.312,415.339z M277.334,64h-42.667 c0-23.531,19.136-42.667,42.667-42.667c4.992,0,9.707,1.024,14.165,2.603C282.656,34.912,277.334,48.843,277.334,64z M298.667,64 c0-10.72,4.107-20.416,10.667-27.925C315.894,43.584,320,53.28,320,64H298.667z M341.334,64c0-15.157-5.323-29.088-14.165-40.064 c4.459-1.579,9.173-2.603,14.165-2.603C364.864,21.333,384,40.469,384,64H341.334z M426.016,405.333l-20-320h21.291l20,320 H426.016z"></path> </g> </g> <g> <g> <circle cx="224" cy="149.333" r="10.667"></circle> </g> </g> <g> <g> <circle cx="277.334" cy="149.333" r="10.667"></circle> </g> </g> <g> <g> <circle cx="330.667" cy="149.333" r="10.667"></circle> </g> </g> </g>
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                     style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0", transform: "translate(25%,25%)"}}
                >
                    4
                </div>
            </Button>
        </Container>
    </NavbarBS>
  );
}

export default Navbar;