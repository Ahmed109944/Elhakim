import { Input, Select } from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ProfileSetting() {
  return (
    <form>
      <div className="">
        <div className="">
          <div className="form-group">
            <div className="change-avatar">
              <div className="profile-img">
                <img
                  src="../assets/img/patients/patient.jpg"
                  alt="User Image"
                />
              </div>
              <div className="upload-img">
                <div className="change-photo-btn">
                  <span>
                    <ArrowUpIcon className="inline w-5 h-5" /> Upload Photo
                  </span>
                  <Input
                    type="file"
                    className="bg-blue-400 upload"
                    alt={
                      "<span><ArrowUpIcon className='inline w-5 h-5'/> Upload Photo</span>"
                    }
                  />
                </div>
                <small className="form-text text-muted">
                  Allowed JPG, GIF or PNG. Max size of 2MB
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>First Name</label>
            <Input
              type="text"
              className="form-control "
              defaultValue="Richard"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Last Name</label>
            <Input type="text" className="form-control" defaultValue="Wilson" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Date of Birth</label>
            <div className="cal-icon">
              <Input
                type="text"
                className="form-control datetimepicker"
                defaultValue="24-07-1983"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Blood Group</label>
            <Select className="form-control select">
              <option>A-</option>
              <option>A+</option>
              <option>B-</option>
              <option>B+</option>
              <option>AB-</option>
              <option>AB+</option>
              <option>O-</option>
              <option>O+</option>
            </Select>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Email ID</label>
            <Input
              type="email"
              className="form-control"
              defaultValue="richard@example.com"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Mobile</label>
            <Input
              type="text"
              defaultValue="+1 202-555-0125"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label>Address</label>
            <Input
              type="text"
              className="form-control"
              defaultValue="806 Twin Willow Lane"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>City</label>
            <Input
              type="text"
              className="form-control"
              defaultValue="Old Forge"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>State</label>
            <Input
              type="text"
              className="form-control"
              defaultValue="Newyork"
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Zip Code</label>
            <Input type="text" className="form-control" defaultValue={13420} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Country</label>
            <Input
              type="text"
              className="form-control "
              defaultValue="United States"
            />
          </div>
        </div>
      </div>
      <div className="text-center submit-section">
        <button
          type="submit"
          className="p-2 mt-2 font-bold text-white bg-green-300 rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
