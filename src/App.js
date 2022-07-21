import "./App.css";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.png";
import logo from "./images/logo.png";

function App() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        {/* title  */}
        <div className="title">
          <h2 className="text-5xl text-center text-[#004750] font-[600] ff-workSans">
            what we do
          </h2>
          <p className="text-xl text-center text-[#646464] ff-workSans">
            Luctus laoreet primis tempor tristique elementum dignissim morbi
            suspendisse.
          </p>
        </div>
        <div className="mt-12 main-wrapper mx-auto w-7/8 h-[700px] border border-[#E3EEF0] rounded-[350px] flex items-center justify-center">
          <div className="inner-wrapper-1 bg-white mx-auto w-11/12 h-[650px] border border-[#E3EEF0] rounded-[300px] flex items-center justify-center">
            <div className="relative inner-wrapper-2 icon-wrapper bg-white mx-auto w-9/12 h-[550px] border border-dashed border-[#008C96] rounded-[200px]">
              {/*single icon content-1 */}
              <div className="content-1 w-[200px] h-[140px] absolute top-[-110px] left-[50%] translate-x-[-50%] z-[10]">
                <img className="object-cover" src={img1} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-12 leading-[20px]">
                  Lead to Lease CRM
                </p>
              </div>
              {/*single icon content-2 */}
              <div className="content-2 w-[200px] h-[140px] absolute top-0 right-[-70px] z-[10]">
                <img className="object-cover" src={img2} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-4 leading-[20px]">
                  Resident and Tenant Portals
                </p>
              </div>
              {/*single icon content-3 */}
              <div className="content-3 w-[200px] h-[140px] absolute bottom-0 right-[-35px] z-[10]">
                <img className="object-cover" src={img3} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-4 leading-[20px]">
                  Community
                </p>
              </div>

              {/*single icon content-4 */}
              <div className="content-4 w-[200px] h-[140px] absolute bottom-[-35px] left-[50%] translate-x-[-50%] z-[10]">
                <img className="object-cover" src={img4} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] leading-[20px]">
                  Communication
                </p>
              </div>
              {/*single icon content-5 */}
              <div className="content-5 w-[200px] h-[140px] absolute bottom-0 left-[-35px] z-[10]">
                <img className="object-cover" src={img5} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-4 leading-[20px]">
                  Payments
                </p>
              </div>

              {/*single icon content-6 */}
              <div className="content-2 w-[200px] h-[140px] absolute top-[50%] translate-y-[-50%] left-[-100px] z-[10]">
                <img className="object-cover" src={img6} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-4 leading-[20px]">
                  Maintenance
                </p>
              </div>

              {/*single icon content-7 */}
              <div className="content-2 w-[200px] h-[140px] absolute top-0 left-[-70px] z-[10]">
                <img className="object-cover" src={img7} alt="img" />
                <p className="text-[#004750] mt-[-60px] text-center font-[600] text-[20px] px-4 leading-[20px]">
                  Reports
                </p>
              </div>

              {/* main brief */}
              <div className="main-brief-wrapper absolute top-[100px] left-[50%] translate-x-[-50%] z-10  w-[325px]">
                <div className="arrow h-0 w-0 border-x-[22px] border-x-transparent border-b-[22px] border-b-white absolute top-[-22px] left-[50%] translate-x-[-50%] "></div>
                <div className="brief-box py-8 px-4 bg-white w-[325px] border rounded-[10px]">
                  <p className="text-[#646464] text-[18px] text-center">
                    Vitae tortor consequat lacinia nunc sodales potenti cras loi
                    suspendisse tempor liberomu risus nibh eget platea justo
                  </p>
                </div>
                <img
                  className="mt-8 text-center mx-auto"
                  src={logo}
                  alt="img"
                />
              </div>

              <div className="inner-wrapper-3 bg-white mx-auto w-9/12 h-[400px] border border-[#D9F3F4] rounded-[100px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
