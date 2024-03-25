import { Input } from "@material-tailwind/react";
export default function ChangePassword() {
  return (
    <form className="p-5 bg-gray-50">
      <div className="form-group">
        <label>Old Password</label>
        <Input type="password" className="form-control" />
      </div>
      <div className="form-group">
        <label>New Password</label>
        <Input type="password" className="form-control" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <Input type="password" className="form-control" />
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
