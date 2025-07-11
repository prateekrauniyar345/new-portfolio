import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Gear = () =>{

    const imageStyle={
        width : '70px', 
        height : '70px',
        objectFit : 'cover',
        borderRadius : '10px',
        marginBottom : '8px',
    }
    const gearItems = [
        { 
            name: 'Mac-Mini', 
            description: 'Apple M4 chip with 10-core CPU, 10-core GPU, 16-core Neural Engine', 
            image : 'macmini.jpeg',
            link : 'https://www.apple.com/shop/buy-mac/mac-mini/apple-m4-chip-with-10-core-cpu-and-10-core-gpu-24gb-memory-512gb',
        },
        { 
            name: 'Macbookpro', 
            description: 'Apple M4 chip with 10-core CPU, 10-core GPU, 16-core Neural Engine', 
            image : 'macbookpro.jpg',
            link : 'https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-space-black-standard-display-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-1tb',
        },
        { 
            name: 'Keyboard', 
            description: 'EPOMAKER Ajazz AK820 Pro 75% Wireless Mechanical Keyboard', 
            image : 'keyboard.jpg',
            link : 'https://www.amazon.com/EPOMAKER-Mechanical-Keyboard-Gasket-Mounted-Bluetooth/dp/B0CMWY2QJZ/ref=sr_1_1_sspa?crid=3LII3PSQUZV9V&dib=eyJ2IjoiMSJ9.iynzE6wgzyg7HhI0QAnVNpuby_I5gp8o2ohABV2HSM9lWX4HbyO3CGsKkibnytxymlwXkjo52Hkoj_YUCUdJOmcU7hC4adtHLX8LTAtQ_tA4J5AmJOCNr8z0fx1Wzn_gfZO-L0wA5MpjUEvY03_IBOA0WJ_8maKUYGd36r-dCnsS1XkbOGBfqdt4rGEh7nvzPWwUdyOXeoVEx83WnRV-aH75e5WecdCxAGV0ULA6f_LezcjNjDtbLyUKDgYZfDgT4Rg6QYhJjGHHzaFeBaR1SWsFi6-J6L7rKdvOFkFnjLs.gKtaya1MApqOOJrHes37HMqEE4v_mdxAsznAxnxK47g&dib_tag=se&keywords=ajazz%2Bak820&qid=1752220748&s=electronics&sprefix=ajaz%2B%2Celectronics%2C113&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        },
        { 
            name: 'Mouse', 
            description: 'Wireless Gaming Mouse Bluetooth Mouse', 
            image : 'mouse.jpg',
            link : 'https://www.amazon.com/dp/B0B7PPZVN7/ref=sspa_dk_detail_4?pd_rd_i=B0B7PPZVN7&pd_rd_w=5DTNd&content-id=amzn1.sym.386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_p=386c274b-4bfe-4421-9052-a1a56db557ab&pf_rd_r=4QY362KJ066853W30J06&pd_rd_wg=kxXgk&pd_rd_r=934c4997-5a2f-4986-8bb7-4f2d3cd0dd46&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1',
        },
        { 
            name: 'Monitor', 
            description: 'Dell UltraSharp U3223QE 31.5" 4K UHD WLED LCD Monitor', 
            image : 'dell.jpg',
            link : 'https://www.amazon.com/Dell-Sparepart-LED-Monitor-68-47-0U2723QE/dp/B0BXQX2BG4/ref=sr_1_3?crid=1VI8NQH165Q1E&dib=eyJ2IjoiMSJ9.gt_YQ9KhkcUpZnp68zKVh5YPkihc09OQq36JDW4NQIlpnHwQvqg9EZGFdMw6_oLWwbD_tVyh_SZN_CaUh4ib9jh7sNSqn9uRK50hau6z6HPGDmiJOxR7GP47MqrK6zYzlEtrX8iu8feiy0eqbniDy6AjHtM_X7VQ4stR0zVMkGuzCOkpW9oMcFHJY_VhR-j0LH0a1eQTbNKtAuz65C1zUQglfOLhXXnoK6Izxgvwm7-6URQBEhuv4zq-hoUhkAgOXRzk7CU15OGT8K78PGD1evz1leYiRnm8b6ESjdgvtWw.xQlu4yDwVzC_HOD9lS6UDvgdDOFdp_8wt1csYU2FKPc&dib_tag=se&keywords=dell+ultrasharp+4k&qid=1752220674&s=electronics&sprefix=dell+ultrasharp+4k+%2Celectronics%2C133&sr=1-3',
        },
        { 
            name: 'Game Supply', 
            description: 'MSI MAG A650BE Gaming Power Supply', 
            image : 'gamesupply.jpg',
            link : 'https://www.amazon.com/dp/B0CZWTS2CL?ref=cm_sw_r_cp_ud_dp_ZFTTEHZC7X5E7853ZAT8&ref_=cm_sw_r_cp_ud_dp_ZFTTEHZC7X5E7853ZAT8&social_share=cm_sw_r_cp_ud_dp_ZFTTEHZC7X5E7853ZAT8',
        },
        { 
            name: 'Graphics Card', 
            description: 'PowerColor Fighter AMD Radeon RX 6600 Graphics Card', 
            image : 'graphicscard.jpg',
            link : 'https://www.amazon.com/dp/B09H3PY14M?ref=cm_sw_r_cp_ud_dp_FBEWFCBWWRE04EBC2XQ4&ref_=cm_sw_r_cp_ud_dp_FBEWFCBWWRE04EBC2XQ4&social_share=cm_sw_r_cp_ud_dp_FBEWFCBWWRE04EBC2XQ4',
        },
        { 
            name: 'Motherboard', 
            description: 'MSI B550M PRO-VDH WiFi ProSeries Motherboard', 
            image : 'motherboard.jpeg',
            link : 'https://www.amazon.com/dp/B089D1YG11?ref=cm_sw_r_cp_ud_dp_0KT1VAHHHK7DVZGEPPEN&ref_=cm_sw_r_cp_ud_dp_0KT1VAHHHK7DVZGEPPEN&social_share=cm_sw_r_cp_ud_dp_0KT1VAHHHK7DVZGEPPEN',
        },
        { 
            name: 'Processor', 
            description: 'AMD Ryzen 5 5600X 6-core, 12-thread unlocked desktop processor', 
            image : 'processor.jpg',
            link : 'https://www.amazon.com/dp/B08166SLDF?ref=cm_sw_r_cp_ud_dp_JNPR7FFNEDCFP1HA1VRX&ref_=cm_sw_r_cp_ud_dp_JNPR7FFNEDCFP1HA1VRX&social_share=cm_sw_r_cp_ud_dp_JNPR7FFNEDCFP1HA1VRX&th=1',
        },
        { 
            name: 'External SSD', 
            description: 'Crucial X9 4TB Portable SSD, Up to 1050MB/s, USB 3.2 USB-C', 
            image : 'ssd.jpeg',
            link : 'https://www.amazon.com/Crucial-4TB-Portable-SSD-CT4000X9SSD902/dp/B0CGVZL1M1/ref=sr_1_19?crid=ADAGJ02F09XG&dib=eyJ2IjoiMSJ9.JZCTVKIokOq1ehYj89P9wfQQVynfCJlJo9CjL3n4o-VNmyhvaIdEwhEupmtMa1ovMrZzUDsw58mA5zpU4emm0XDiQMoyBbQmJGSjh5vc2hNdJUeD_JH1TeHJenzHkGjNdzhJBUIMTJwFJbpA7F3cY7Bp6O2TSwxwDidjaGgAepLFKOJfqPQX3wQRAcfLwztZr2RveflOhNhzns9qaMs5_1XQcriEEI1nU4ekXmuNOWU.oZDc5zQZ0ux7UlELZrA9BypCnetYXFAwyMDjALACdt8&dib_tag=se&keywords=ssd%2B4tb&qid=1752222509&sprefix=ssd%2B4tb%2B%2Caps%2C153&sr=8-19&th=1',
        },
        { 
            name: 'Chair', 
            description: 'Steelcase Series 2 Office Chair', 
            image : 'chair.jpg',
            link : 'https://www.amazon.com/Steelcase-Office-Microknit-Licorice-Connect/dp/B08L8J6BYV/ref=sr_1_14_sspa?crid=17PV1N2PXM2ZR&dib=eyJ2IjoiMSJ9.ERFmbc57czw5OrOg5YpIO3XM1h7Y9P4BLi8vhIIF6jR8GFHB5v00QwjRnX9BQ2kpAatJkxekvN1rDu9tTDnCYZGo_OpD5ThRCU_Ah8F2FYRha4YnsExAnBc_aQimVwTLFZIcUODhgbSPSSjU_hP0e7RkNE_FrE881gnMrzLd2yu93Ywflcqpy5br86reeVjZMTUfInnM5E3IpMyK6oe2Bpg6tpF47vhxbo4TpEwmjL4xmRtjS0mffKtXMOQPS96xvwAF1LyzogkbuD7UXf-iQfVMOTlk6ibzEQC--zIDl20.FQXurAc5IFNRjhhLojj3NFykbY46sSr0wAxxASont4Q&dib_tag=se&keywords=work%2Bchair&qid=1752220567&s=home-garden&sprefix=work%2Bchai%2Cgarden%2C135&sr=1-14-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1',
        },
        { 
            name: 'Table', 
            description: 'FLEXISPOT EN1 One-Piece Standing Desk', 
            image : 'table.jpg',
            link : 'https://www.amazon.com/Flexispot-Standing-Adjustable-Electric-Whole-Piece/dp/B08BJ2QRM9?th=1',
        },

    ]
    return(
        <>
            <div className="d-flex flex-column mt-4 mb-4">
                <h3>Gear</h3>
                <p>What I use.</p>
            </div>

            {/* contents */}
            <div className="row no-gutters">
                {gearItems.map((item, index) => (
                    <div
                        key={index}
                        className="col-12 col-md-6 d-flex flex-column align-items-center mb-4 mt-4 hoverEffect"
                    >
                        <div className="d-flex flex-row align-items-center justify-content-center" style={{fontSize: '12px'}}>
                            <div style={{ width: '70px', height: '70px', marginRight: '20px' }}>
                                <img style={imageStyle}  src={`gear/${item.image}`} alt={item.description} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                            <a style= {{color : 'gray' }} href={item.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Gear;