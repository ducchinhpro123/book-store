import {useEffect, useState} from "react";
import {useAuth, upload} from "../../firestore.jsx";

export default function UserInformation() {
  const [imageUrl, setImageUrl] = useState('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=5719264a783a0ecc1ff36f1a959fb31b62833cf41168f0b8a3e0f9a0849308c5&ipo=images')
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)

  const currentUser = useAuth()

  async function handleClick() {
    await upload(photo, currentUser, setLoading)
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setImageUrl(currentUser.photoURL)
    }
  }, [currentUser]);

  return (
      <div className="container-fluid">
        <div className="card shadow mb-3" style={{margin: '100px', padding: '50px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px'}}>Profile</h1>
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">User Settings</p>
          </div>
          <div>
            {loading && <p>Please wait while we uploading your image...</p>}
            <div
                className="row"
                style={{marginBottom: 25, textAlign: "left"}}
            >
              <div
                  className="col-sm-4 col-md-4 col-lg-3 col-xl-2 col-xxl-2"
                  style={{
                    display: "inline",
                    textAlign: "center",
                    marginBottom: 25,
                  }}
              >
                <img
                    className="rounded-circle mb-3 mt-4 img-fluid" alt={"avatar"}
                    src={imageUrl}
                    style={{display: "inline", maxHeight: 110}}
                />
                <input type="file" onChange={handleChange}/>
                <button onClick={handleClick} className={'btn btn-primary mt-2'}>Upload</button>
                <br/>
              </div>
              <div className="col-sm-8 col-md-8 col-lg-9 col-xl-10 col-xxl-10 align-self-center">
                <div className="row">
                  <div className="col-md-12 text-start">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        <strong>Your email</strong>
                      </label>
                      <input
                          className="form-control"
                          type="text"
                          placeholder="Username"
                          name="username"
                          required=""
                          disabled
                          value={currentUser ? currentUser.email : ""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
