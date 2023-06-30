import { useContext } from "react";
import { dataContext } from "../../component/Context/DataContext";
import logotipo from '../../assets/img/logo y banner/logotipo.jpg'
import React from 'react'
import CartCounter from "../CartCounter/CartCounter";
import { Button } from "react-bootstrap";
import CartTotal from "../CartTotal/CartTotal";


const CartElement = () => {
    const { cart, setCart } = useContext(dataContext);

    const removeFromCart = (id) => {
        const foundId = cart.find((element) => element.id === id);

        const newCart = cart.filter((element) => {
            return element !== foundId
        });
        setCart(newCart);
    };



    return (
        <>
            <div >
                <section>
                    <h1 class="sr-only">Checkout</h1>

                    <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                        <div class="bg-gray-50 py-12 md:py-24">
                            <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                                <div class="flex items-center gap-4">
                                    <span class="h-20 w-20 rounded-full"><img src={logotipo} alt="" /></span>

                                    <h2 class="font-medium text-gray-900">Borcelle</h2>
                                </div>

                                <div>
                                    <p class="text-2xl font-medium tracking-tight text-gray-900">
                                        <CartTotal />
                                    </p>

                                    <p class="mt-1 text-sm text-gray-600">Por la compra de</p>
                                </div>

                                <div>
                                    <div class="flow-root">
                                        <ul class="-my-4 divide-y divide-gray-100">
                                            {cart.map((product) => (
                                                <li key={product.id} class="flex items-center gap-4 py-4">
                                                    <img
                                                        src={product.imagenes}
                                                        alt=""
                                                        class="h-16 w-16 rounded object-cover"
                                                    />
                                                    <div>
                                                        <h3 class="text-sm text-gray-900">{product.name}</h3>
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Tamaño:</td>
                                                                    <td>{product.categoria}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Precio: $</td>
                                                                    <td>{product.precio * product.quanty}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="actions-container">
                                                                            <div className="d-flex">
                                                                                <CartCounter product={product} />
                                                                                <div>
                                                                                    <Button className="bg-danger" onClick={() => removeFromCart(product.id)}>
                                                                                        🗑
                                                                                    </Button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white py-12 md:py-24">
                            <div class="mx-auto max-w-lg px-4 lg:px-8">
                                <div className="d-flex">
                                    <svg width="100px" height="200px" viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                        <g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="white" stroke="#F3F3F3" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4388 20.2562L26.6913 18.6477L26.1288 18.6346H23.4429L25.3095 6.76505C25.3153 6.72911 25.3341 6.69575 25.3616 6.67201C25.3892 6.64827 25.4243 6.63525 25.4611 6.63525H29.9901C31.4937 6.63525 32.5313 6.94897 33.073 7.56826C33.327 7.85879 33.4887 8.16246 33.567 8.49653C33.6491 8.84713 33.6505 9.26596 33.5704 9.77689L33.5646 9.81405V10.1415L33.8186 10.2858C34.0324 10.3996 34.2024 10.5298 34.3328 10.6788C34.55 10.9273 34.6905 11.2431 34.7499 11.6173C34.8113 12.0022 34.791 12.4604 34.6905 12.979C34.5746 13.5755 34.3873 14.0951 34.1343 14.5202C33.9016 14.9119 33.6052 15.2369 33.2531 15.4886C32.9171 15.7279 32.5178 15.9095 32.0664 16.0257C31.6288 16.1399 31.1301 16.1975 30.583 16.1975H30.2305C29.9786 16.1975 29.7338 16.2886 29.5416 16.4517C29.3489 16.6183 29.2215 16.8459 29.1824 17.0947L29.1558 17.2396L28.7096 20.0747L28.6894 20.1787C28.684 20.2117 28.6748 20.2281 28.6613 20.2392C28.6493 20.2494 28.632 20.2562 28.615 20.2562H26.4388" fill="#28356A" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0589 9.85181C34.0455 9.93848 34.03 10.027 34.0126 10.1181C33.4154 13.1934 31.372 14.2558 28.7623 14.2558H27.4335C27.1143 14.2558 26.8453 14.4881 26.7957 14.8038L25.9227 20.3573C25.8904 20.5647 26.0497 20.7514 26.2582 20.7514H28.615C28.894 20.7514 29.1311 20.5481 29.1751 20.2721L29.1982 20.1521L29.6419 17.3281L29.6705 17.1732C29.7139 16.8962 29.9515 16.6928 30.2305 16.6928H30.583C32.8663 16.6928 34.6538 15.7632 35.1763 13.0728C35.3944 11.9489 35.2815 11.0105 34.704 10.3505C34.5293 10.1516 34.3125 9.98635 34.0589 9.85181" fill="#298FC2" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4342 9.60206C33.3429 9.57534 33.2488 9.5512 33.1522 9.52936C33.0551 9.50807 32.9557 9.48922 32.8533 9.47267C32.4951 9.41462 32.1025 9.38708 31.682 9.38708H28.1322C28.0447 9.38708 27.9617 9.40689 27.8874 9.44269C27.7236 9.52163 27.602 9.67707 27.5726 9.86736L26.8174 14.6641L26.7957 14.8039C26.8454 14.4882 27.1144 14.2558 27.4335 14.2558H28.7623C31.372 14.2558 33.4154 13.1929 34.0127 10.1181C34.0305 10.0271 34.0455 9.93856 34.0589 9.85189C33.9078 9.77146 33.7442 9.7027 33.568 9.64411C33.5244 9.62959 33.4795 9.61562 33.4342 9.60206" fill="#22284F" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5726 9.86737C27.6021 9.67708 27.7236 9.52165 27.8874 9.44325C27.9622 9.40731 28.0447 9.38751 28.1322 9.38751H31.682C32.1025 9.38751 32.4951 9.41518 32.8534 9.47323C32.9557 9.48964 33.0551 9.50863 33.1522 9.52992C33.2488 9.55162 33.3429 9.5759 33.4342 9.60248C33.4795 9.61605 33.5244 9.63015 33.5684 9.64412C33.7446 9.70272 33.9084 9.77202 34.0595 9.85191C34.2372 8.71545 34.058 7.94168 33.4453 7.241C32.7698 6.46953 31.5507 6.1394 29.9906 6.1394H25.4615C25.1429 6.1394 24.8711 6.37174 24.8218 6.68803L22.9354 18.6796C22.8982 18.9168 23.0807 19.1309 23.3193 19.1309H26.1153L27.5726 9.86737" fill="#28356A" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0946 23.5209H9.79248C9.56648 23.5209 9.3743 23.6855 9.339 23.9093L8.00345 32.4009C7.97695 32.5686 8.10638 32.7195 8.27584 32.7195H9.85225C10.0782 32.7195 10.2704 32.555 10.3057 32.3308L10.6659 30.0404C10.7006 29.8162 10.8932 29.6516 11.1188 29.6516H12.1641C14.3393 29.6516 15.5946 28.5959 15.9226 26.5042C16.0703 25.589 15.9288 24.87 15.5014 24.3664C15.0321 23.8134 14.1997 23.5209 13.0946 23.5209ZM13.4755 26.6224C13.2949 27.8106 12.3896 27.8106 11.5143 27.8106H11.0159L11.3655 25.5914C11.3863 25.4573 11.5021 25.3585 11.6374 25.3585H11.8658C12.4621 25.3585 13.0246 25.3585 13.3152 25.6994C13.4886 25.9027 13.5416 26.2049 13.4755 26.6224Z" fill="#28356A" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0496 26.5199H21.4683C21.3336 26.5199 21.2171 26.6187 21.1964 26.7528L21.1264 27.1963L21.0159 27.0356C20.6736 26.5373 19.9101 26.3707 19.1483 26.3707C17.4008 26.3707 15.9084 27.698 15.6177 29.5598C15.4666 30.4885 15.6814 31.3766 16.2068 31.9959C16.6887 32.5653 17.3782 32.8026 18.1985 32.8026C19.6065 32.8026 20.3871 31.8947 20.3871 31.8947L20.3167 32.3354C20.2902 32.5038 20.4196 32.6549 20.5881 32.6549H22.0124C22.2389 32.6549 22.4301 32.4903 22.4659 32.2661L23.3205 26.8385C23.3475 26.6714 23.2185 26.5199 23.0496 26.5199ZM20.8453 29.6064C20.6928 30.5122 19.9759 31.1204 19.0613 31.1204C18.6022 31.1204 18.2353 30.9727 17.9995 30.6929C17.7658 30.415 17.6771 30.0194 17.7513 29.5787C17.8939 28.6805 18.6229 28.0524 19.5235 28.0524C19.9725 28.0524 20.3375 28.2022 20.578 28.4843C20.8188 28.7695 20.9145 29.1676 20.8453 29.6064Z" fill="#28356A" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3495 26.6556H29.7604C29.6088 26.6556 29.4664 26.7312 29.3805 26.8576L27.1888 30.095L26.2598 26.9839C26.2014 26.7892 26.0223 26.6556 25.8195 26.6556H24.2581C24.0682 26.6556 23.9365 26.8416 23.9968 27.0208L25.7471 32.1718L24.1016 34.5014C23.9722 34.6849 24.1025 34.9372 24.3261 34.9372H25.9132C26.0639 34.9372 26.2048 34.8635 26.2903 34.7397L31.5754 27.089C31.702 26.906 31.572 26.6556 31.3495 26.6556" fill="#28356A" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6469 23.5209H33.3444C33.1189 23.5209 32.9267 23.6855 32.8914 23.9093L31.5559 32.4009C31.5294 32.5686 31.6588 32.7195 31.8273 32.7195H33.5221C33.6794 32.7195 33.8141 32.6044 33.8387 32.4475L34.2178 30.0404C34.2525 29.8162 34.4453 29.6516 34.6707 29.6516H35.7156C37.8912 29.6516 39.1461 28.5959 39.4745 26.5042C39.6227 25.589 39.4803 24.87 39.0529 24.3664C38.584 23.8134 37.7521 23.5209 36.6469 23.5209ZM37.0279 26.6224C36.8478 27.8106 35.9424 27.8106 35.0666 27.8106H34.5689L34.9189 25.5914C34.9396 25.4573 35.0545 25.3585 35.1902 25.3585H35.4186C36.0144 25.3585 36.5774 25.3585 36.868 25.6994C37.0414 25.9027 37.094 26.2049 37.0279 26.6224Z" fill="#298FC2" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5999 26.5199H45.0195C44.8839 26.5199 44.7685 26.6187 44.7482 26.7528L44.6782 27.1963L44.5671 27.0356C44.2248 26.5373 43.4619 26.3707 42.6999 26.3707C40.9526 26.3707 39.4607 27.698 39.1701 29.5598C39.0194 30.4885 39.2332 31.3766 39.7585 31.9959C40.2415 32.5653 40.9299 32.8026 41.7503 32.8026C43.1582 32.8026 43.9389 31.8947 43.9389 31.8947L43.8685 32.3354C43.842 32.5038 43.9713 32.6549 44.1408 32.6549H45.5647C45.7902 32.6549 45.9823 32.4903 46.0176 32.2661L46.8727 26.8385C46.8988 26.6714 46.7693 26.5199 46.5999 26.5199ZM44.3958 29.6064C44.2442 30.5122 43.5262 31.1204 42.6116 31.1204C42.1534 31.1204 41.7856 30.9727 41.5498 30.6929C41.3163 30.415 41.2283 30.0194 41.3016 29.5787C41.4451 28.6805 42.1732 28.0524 43.0738 28.0524C43.5228 28.0524 43.8878 28.2022 44.1283 28.4843C44.3701 28.7695 44.4657 29.1676 44.3958 29.6064Z" fill="#298FC2" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M48.3324 23.7543L46.9771 32.4013C46.9506 32.569 47.0799 32.7199 47.2484 32.7199H48.611C48.8375 32.7199 49.0296 32.5554 49.0643 32.3312L50.4008 23.84C50.4275 23.6724 50.298 23.5209 50.1295 23.5209H48.6038C48.4691 23.5213 48.3532 23.6202 48.3324 23.7543" fill="#298FC2" />
                                        </g>
                                    </svg>
                                    <svg width="100px" height="200px" viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="white" stroke="#F3F3F3">
                                            </rect>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2489 30.8906V32.3674V33.8443H20.6016V33.4857C20.3963 33.7517 20.0848 33.9186 19.6614 33.9186C18.8266 33.9186 18.1722 33.27 18.1722 32.3674C18.1722 31.4656 18.8266 30.8163 19.6614 30.8163C20.0848 30.8163 20.3963 30.9832 20.6016 31.2492V30.8906H21.2489ZM19.7419 31.4218C19.1816 31.4218 18.8387 31.8483 18.8387 32.3674C18.8387 32.8866 19.1816 33.3131 19.7419 33.3131C20.2773 33.3131 20.6387 32.905 20.6387 32.3674C20.6387 31.8299 20.2773 31.4218 19.7419 31.4218ZM43.1228 32.3674C43.1228 31.8483 43.4657 31.4218 44.026 31.4218C44.5621 31.4218 44.9228 31.8299 44.9228 32.3674C44.9228 32.905 44.5621 33.3131 44.026 33.3131C43.4657 33.3131 43.1228 32.8866 43.1228 32.3674ZM45.5338 29.7044V32.3674V33.8443H44.8858V33.4857C44.6804 33.7517 44.3689 33.9186 43.9455 33.9186C43.1107 33.9186 42.4563 33.27 42.4563 32.3674C42.4563 31.4656 43.1107 30.8163 43.9455 30.8163C44.3689 30.8163 44.6804 30.9832 44.8858 31.2492V29.7044H45.5338ZM29.2838 31.3914C29.7008 31.3914 29.9688 31.6509 30.0373 32.1079H28.4925C28.5616 31.6814 28.8225 31.3914 29.2838 31.3914ZM27.8138 32.3674C27.8138 31.4465 28.424 30.8163 29.2966 30.8163C30.1307 30.8163 30.7038 31.4465 30.7102 32.3674C30.7102 32.4537 30.7038 32.5344 30.6974 32.6143H28.4868C28.5802 33.1462 28.9601 33.3379 29.3771 33.3379C29.6758 33.3379 29.9938 33.2261 30.2433 33.0288L30.5605 33.5048C30.1991 33.8075 29.7885 33.9186 29.3401 33.9186C28.449 33.9186 27.8138 33.3068 27.8138 32.3674ZM37.1126 32.3674C37.1126 31.8483 37.4555 31.4218 38.0158 31.4218C38.5511 31.4218 38.9126 31.8299 38.9126 32.3674C38.9126 32.905 38.5511 33.3131 38.0158 33.3131C37.4555 33.3131 37.1126 32.8866 37.1126 32.3674ZM39.5228 30.8906V32.3674V33.8443H38.8755V33.4857C38.6695 33.7517 38.3587 33.9186 37.9352 33.9186C37.1004 33.9186 36.446 33.27 36.446 32.3674C36.446 31.4656 37.1004 30.8163 37.9352 30.8163C38.3587 30.8163 38.6695 30.9832 38.8755 31.2492V30.8906H39.5228ZM33.4569 32.3674C33.4569 33.2636 34.0857 33.9186 35.0452 33.9186C35.4936 33.9186 35.7923 33.8196 36.116 33.5663L35.8051 33.0472C35.5621 33.2205 35.3068 33.3131 35.026 33.3131C34.5091 33.3068 34.1292 32.9361 34.1292 32.3674C34.1292 31.7988 34.5091 31.4281 35.026 31.4218C35.3068 31.4218 35.5621 31.5144 35.8051 31.6877L36.116 31.1685C35.7923 30.9153 35.4936 30.8163 35.0452 30.8163C34.0857 30.8163 33.4569 31.4713 33.4569 32.3674ZM41.0177 31.2492C41.1859 30.9896 41.429 30.8163 41.8026 30.8163C41.9337 30.8163 42.1205 30.8411 42.2638 30.8969L42.0642 31.5024C41.9273 31.4465 41.7904 31.4281 41.6593 31.4281C41.2358 31.4281 41.0241 31.6997 41.0241 32.1885V33.8443H40.3761V30.8906H41.0177V31.2492ZM24.4505 31.1254C24.1389 30.9217 23.7098 30.8163 23.2364 30.8163C22.4822 30.8163 21.9967 31.1749 21.9967 31.762C21.9967 32.2437 22.3582 32.5407 23.024 32.6334L23.3298 32.6765C23.6848 32.7261 23.8524 32.8187 23.8524 32.9856C23.8524 33.2141 23.6157 33.3442 23.1737 33.3442C22.7253 33.3442 22.4017 33.2021 22.1835 33.0351L21.8784 33.5352C22.2334 33.7948 22.6818 33.9186 23.1673 33.9186C24.027 33.9186 24.5253 33.5168 24.5253 32.9545C24.5253 32.4353 24.1332 32.1637 23.4852 32.0711L23.1801 32.0272C22.9 31.9904 22.6754 31.9353 22.6754 31.7372C22.6754 31.5208 22.8871 31.3914 23.2421 31.3914C23.6221 31.3914 23.9899 31.5335 24.1703 31.6446L24.4505 31.1254ZM32.0184 31.2492C32.1859 30.9896 32.429 30.8163 32.8025 30.8163C32.9337 30.8163 33.1205 30.8411 33.2637 30.8969L33.0641 31.5024C32.9273 31.4465 32.7904 31.4281 32.6592 31.4281C32.2358 31.4281 32.0241 31.6997 32.0241 32.1885V33.8443H31.3768V30.8906H32.0184V31.2492ZM27.2784 30.8906H26.2198V29.9944H25.5654V30.8906H24.9616V31.4776H25.5654V32.8251C25.5654 33.5105 25.8334 33.9186 26.5991 33.9186C26.8799 33.9186 27.2036 33.8323 27.4089 33.6901L27.2221 33.1398C27.0289 33.2509 26.8172 33.3068 26.649 33.3068C26.3253 33.3068 26.2198 33.1087 26.2198 32.8123V31.4776H27.2784V30.8906ZM17.5997 31.9904V33.8443H16.9453V32.2005C16.9453 31.6997 16.7336 31.4218 16.2916 31.4218C15.8617 31.4218 15.563 31.6941 15.563 32.2069V33.8443H14.9086V32.2005C14.9086 31.6997 14.6912 31.4218 14.2613 31.4218C13.8186 31.4218 13.5321 31.6941 13.5321 32.2069V33.8443H12.8784V30.8906H13.5264V31.2548C13.7695 30.909 14.0803 30.8163 14.3982 30.8163C14.853 30.8163 15.1767 31.0144 15.382 31.3418C15.6564 30.9274 16.0485 30.8099 16.4285 30.8163C17.1513 30.8227 17.5997 31.2923 17.5997 31.9904Z" fill="#231F20"></path> <path d="M34.0465 25.8715H24.2359V8.3783H34.0465V25.8715Z" fill="#FF5F00"></path> <path d="M24.8583 17.1253C24.8583 13.5767 26.5328 10.4157 29.1405 8.37867C27.2336 6.88907 24.8269 5.99998 22.2114 5.99998C16.0194 5.99998 11 10.9809 11 17.1253C11 23.2697 16.0194 28.2506 22.2114 28.2506C24.8269 28.2506 27.2336 27.3615 29.1405 25.8719C26.5328 23.8349 24.8583 20.6739 24.8583 17.1253" fill="#EB001B">
                                            </path>
                                            <path d="M47.2818 17.1253C47.2818 23.2697 42.2624 28.2506 36.0704 28.2506C33.4548 28.2506 31.0482 27.3615 29.1405 25.8719C31.7489 23.8349 33.4235 20.6739 33.4235 17.1253C33.4235 13.5767 31.7489 10.4157 29.1405 8.37867C31.0482 6.88907 33.4548 5.99998 36.0704 5.99998C42.2624 5.99998 47.2818 10.9809 47.2818 17.1253" fill="#F79E1B">
                                            </path>
                                        </g>
                                    </svg>
                                    <svg width="100px" height="200px" viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="white" stroke="#F3F3F3"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M48.6494 12.7211V27.2361H52.6426V12.0115L48.6494 12.7211" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8205 12.7211L46.8111 12.0115V27.2361H42.8205V12.7211" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M37.136 27.2361V16.1005H41.1286V27.2361H37.136" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1636 13.0775C37.1636 11.9975 38.0453 11.1213 39.1311 11.1213C40.2187 11.1213 41.0998 11.9975 41.0998 13.0775C41.0998 14.1583 40.2187 15.0325 39.1311 15.0325C38.0453 15.0325 37.1636 14.1583 37.1636 13.0775" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M34.884 15.9372C31.1952 16.0554 29.3211 17.7009 29.3211 20.9717V27.2361H33.3469V22.1267C33.3469 20.1692 33.6052 19.33 35.9435 19.2499V15.9951C35.5503 15.9118 34.884 15.9372 34.884 15.9372V15.9372" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0524 16.0878C23.9641 16.3102 23.326 18.105 21.7786 19.9647V12.0115L17.6582 12.8215V27.2361H21.7786V22.7798C22.9717 24.5588 23.5613 27.2361 23.5613 27.2361H28.4957C28.0078 25.2195 25.8728 21.5022 25.8728 21.5022C27.7897 19.0866 28.6306 16.5141 28.7649 16.0878H24.0524" fill="#862165"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7487 17.6755C10.2442 17.6431 9.0753 17.5675 9.0753 16.5224C9.0753 15.2612 10.757 15.2612 11.3881 15.2612C12.4981 15.2612 13.9342 15.5865 14.9611 15.8921C14.9611 15.8921 15.5328 16.0929 16.0194 16.2975L16.0648 16.3102V12.8558L16.004 12.8374C14.7917 12.4162 13.3843 12.0115 10.7736 12.0115C6.27274 12.0115 4.67804 14.6157 4.67804 16.8489C4.67804 18.1349 5.23305 21.1642 10.3861 21.513C10.8241 21.5397 11.984 21.6064 11.984 22.6864C11.984 23.5785 11.0345 24.1033 9.43785 24.1033C7.68841 24.1033 5.99012 23.6611 4.95938 23.2398V26.7965C6.50293 27.1999 8.24342 27.3994 10.2832 27.3994C14.6823 27.3994 16.6543 24.9349 16.6543 22.4914C16.6543 19.722 14.449 17.922 10.7487 17.6755V17.6755" fill="#862165"></path> </g></svg>
                                    <svg width="100px" height="200px" viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path d="M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z" fill="#315881"></path> <path d="M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z" fill="#315881"></path> <path d="M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z" fill="#dfa43b"></path> <path d="M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zM147.467 78.971l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zM83.217 113.785c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z" fill="#315881"></path> </g> </g></svg>
                                    
                                    </div>
                                <form class="grid grid-cols-6 gap-4">
                                    <div class="col-span-3">
                                        <label
                                            for="FirstName"
                                            class="block text-xs font-medium text-gray-700"
                                        >
                                            Nombre
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </div>

                                    <div class="col-span-3">
                                        <label
                                            for="LastName"
                                            class="block text-xs font-medium text-gray-700"
                                        >
                                            Apellido
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <label for="Email" class="block text-xs font-medium text-gray-700">
                                            correo
                                        </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <label for="Phone" class="block text-xs font-medium text-gray-700">
                                            Telefono
                                        </label>

                                        <input
                                            type="tel"
                                            id="Phone"
                                            class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </div>

                                    <fieldset class="col-span-6">
                                        <legend class="block text-sm font-medium text-gray-700">
                                            Detalles de la tarjeta
                                        </legend>

                                        <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                            <div>
                                                <label for="CardNumber" class="sr-only"> Numero tarjeta </label>

                                                <input
                                                    type="text"
                                                    id="CardNumber"
                                                    placeholder="Card Number"
                                                    class="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                                />
                                            </div>

                                            <div class="flex">
                                                <div class="flex-1">
                                                    <label for="CardExpiry" class="sr-only"> Fecha de vencimiento </label>

                                                    <input
                                                        type="text"
                                                        id="CardExpiry"
                                                        placeholder="Expiry Date"
                                                        class="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                                                    />
                                                </div>

                                                <div class="-ms-px flex-1">
                                                    <label for="CardCVC" class="sr-only"> CVC </label>

                                                    <input
                                                        type="text"
                                                        id="CardCVC"
                                                        placeholder="CVC"
                                                        class="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset class="col-span-6">
                                        <legend class="block text-sm font-medium text-gray-700">
                                            Billing Address
                                        </legend>

                                        <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                            <div>
                                                <label for="Country" class="sr-only">Country</label>

                                                <select
                                                    id="Country"
                                                    class="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                                >
                                                    <option>Selecciona</option>
                                                    <option>Englaterra</option>
                                                    <option>Gales</option>
                                                    <option>Scocia</option>
                                                    <option>Francia</option>
                                                    <option>Belgica</option>
                                                    <option>Japon</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label class="sr-only" for="PostalCode"> Codigo Postal </label>

                                                <input
                                                    type="text"
                                                    id="PostalCode"
                                                    placeholder="ZIP/Post Code"
                                                    class="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div class="col-span-6">
                                        <button
                                            class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                        >
                                            Pagar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default CartElement;
