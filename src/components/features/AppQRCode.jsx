import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import LogoOptions from "../common/LogoOptions";
import { IoMdSettings } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";

const AppQRCode = () => {
  const [appName, setAppName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [androidApp, setAndroidApp] = useState("");
  const [iosApp, setIosApp] = useState("");

  const [logo, setLogo] = useState(null);
  const [dotsColor, setDotsColor] = useState("#4267b2");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [markerBorderColor, setMarkerBorderColor] = useState("#000000");
  const [markerCenterColor, setMarkerCenterColor] = useState("#4267b2");
  const [dotsType, setDotsType] = useState("rounded");
  const [cornersType, setCornersType] = useState("square");
  const [cornersDotType, setCornersDotType] = useState("dot");

  const [qrData, setQrData] = useState("");
  const [error, setError] = useState("");

  const ref = useRef(null);
  const qrCode = useRef(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: 300,
      height: 300,
      image: logo ? logo : "",
      dotsOptions: {
        color: dotsColor,
        type: dotsType,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
      cornersSquareOptions: {
        color: markerBorderColor,
        type: cornersType,
      },
      cornersDotOptions: {
        color: markerCenterColor,
        type: cornersDotType,
      },
      imageOptions: {
        crossOrigin: "anonymous",
      },
    });

    qrCode.current.append(ref.current);
  }, [logo]);

  useEffect(() => {
    if (appName && description && website && androidApp && iosApp) {
      const data = JSON.stringify({
        appName,
        description,
        website,
        androidApp,
        iosApp,
      });
      setError(""); 
      setQrData(data);
    } else {
      setError("Please fill all fields."); 
    }
  }, [appName, description, website, androidApp, iosApp]);

  useEffect(() => {
    if (qrCode.current) {
      qrCode.current.update({
        data: qrData,
        image: logo ? logo : "",
        dotsOptions: {
          color: dotsColor,
          type: dotsType,
        },
        backgroundOptions: {
          color: backgroundColor,
        },
        cornersSquareOptions: {
          color: markerBorderColor,
          type: cornersType,
        },
        cornersDotOptions: {
          color: markerCenterColor,
          type: cornersDotType,
        },
      });
    }
  }, [
    qrData,
    logo,
    dotsColor,
    backgroundColor,
    markerBorderColor,
    markerCenterColor,
    dotsType,
    cornersType,
    cornersDotType,
  ]);

  const handleColorChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const onDownloadClick = (extension) => {
    qrCode.current.download({
      extension: extension,
    });
  };

  const handleLogoSelect = (selectedLogo) => {
    setLogo(selectedLogo === null ? null : selectedLogo);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mt-3">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <div className="my-3">
              <h3>Submit App Details</h3>
              <label className="form-label">Submit App Name</label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="eg. Facebook"
                className="form-control my-2"
              />
              <label className="form-label">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="form-control my-2"
              />
              <label className="form-label">Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="eg. https://facebook.com"
                className="form-control my-2"
              />
              <h2>App Links</h2>
              <label htmlFor="" className="form-label">Android App</label>
              <input
                type="text"
                value={androidApp}
                onChange={(e) => setAndroidApp(e.target.value)}
                className="form-control my-2"
                placeholder="https://playstore.com/store/apps"
              />
              <label className="form-label">iOS App</label>
              <input
                type="text"
                value={iosApp}
                onChange={(e) => setIosApp(e.target.value)}
                placeholder="https://apps.apple.com/us/app/"
                className="form-control my-2"
              />
              {error && <div className="text-danger mt-2">{error}</div>} 
            </div>
            <div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <IoMdSettings className="mx-2" /> Options
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2>Color</h2>
                    <p className="mt-2">Background color</p>
                    <div className="form-group-inline d-flex">
                      <input
                        type="color"
                        value={backgroundColor}
                        onChange={handleColorChange(setBackgroundColor)}
                        className="form-control custom-color-input"
                        id="colorInput"
                        style={style.inputColor}
                        title="Background Color"
                      />
                    </div>
                    <p className="mt-2">Dots color</p>
                    <div className="form-group-inline d-flex">
                      <input
                        type="color"
                        value={dotsColor}
                        onChange={handleColorChange(setDotsColor)}
                        className="form-control custom-color-input"
                        id="colorInput"
                        style={style.inputColor}
                      />
                    </div>
                    <p className="mt-2">Marker border color</p>
                    <div className="form-group-inline d-flex">
                      <input
                        type="color"
                        value={markerBorderColor}
                        onChange={handleColorChange(setMarkerBorderColor)}
                        className="form-control custom-color-input"
                        id="colorInput"
                        style={style.inputColor}
                      />
                    </div>
                    <p className="mt-2">Marker center color</p>
                    <div className="form-group-inline d-flex">
                      <input
                        type="color"
                        value={markerCenterColor}
                        onChange={handleColorChange(setMarkerCenterColor)}
                        className="form-control custom-color-input"
                        id="colorInput"
                        style={style.inputColor}
                      />
                    </div>
                    <h2>Shape & Form</h2>
                    <label className="form-label">Dots</label>
                    <select
                      onChange={(e) => setDotsType(e.target.value)}
                      value={dotsType}
                      className="form-control"
                    >
                      <option value="rounded">Rounded</option>
                      <option value="dots">Dots</option>
                      <option value="classy">Classy</option>
                      <option value="classy-rounded">Classy Rounded</option>
                      <option value="extra-rounded">Extra Rounded</option>
                      <option value="square">Square</option>
                    </select>
                    <label className="form-label">Marker border</label>
                    <select
                      onChange={(e) => setCornersType(e.target.value)}
                      value={cornersType}
                      className="form-control"
                    >
                      <option value="square">Square</option>
                      <option value="extra-rounded">Extra Rounded</option>
                    </select>
                    <label className="form-label">Marker center</label>
                    <select
                      onChange={(e) => setCornersDotType(e.target.value)}
                      value={cornersDotType}
                      className="form-control"
                    >
                      <option value="dot">Dot</option>
                      <option value="square">Square</option>
                    </select>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  className="mt-5"
                  style={{ maxWidth: "900px" }}
                >
                  <Accordion.Header>
                    <FaImages className="mx-2" /> Logo
                  </Accordion.Header>
                  <Accordion.Body>
                    <LogoOptions
                      logo={logo}
                      onLogoSelect={handleLogoSelect}
                      onFileChange={handleFileChange}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-lg-6 text-center bg-light p-4">
            <div ref={ref} />
            <div className="mt-3">
              <button
                onClick={() => onDownloadClick("png")}
                className="btn btn-warning me-2"
                disabled={!!error} 
              >
                Download PNG
              </button>
              <button
                onClick={() => onDownloadClick("svg")}
                className="btn btn-warning"
                disabled={!!error}
              >
                Download SVG
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const style = {
  inputColor: {
    width: "100px",
    height: "50px",
    padding: "5px",
  },
};

export default AppQRCode;
