const OpeningHours = () => {
  return (
    <div className="max-w-md py-8 mx-auto">
      <table className="w-60% m-auto border border-gray-300 ">
        <thead>
          <tr>
            <th className="text-left">Today</th>
            <th className="text-left">07:00 AM - 09:00 PM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Monday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Tuesday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Wednesday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Thursday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Friday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Saturday</td>
            <td className="py-2">07:00 AM - 09:00 PM</td>
          </tr>
          <tr>
            <td className="py-2">Sunday</td>
            <td className="py-2">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
