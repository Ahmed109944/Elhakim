import axios from "axios";
import { Component } from "react";

export default class Prescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/api/v1/prescription/?user=${this.props.userId}`
      )
      .then((response) => {
        this.setState({ data: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    return (
      <div>
        <div className="m-5" ref={(el) => (this.componentRef = el)}>
          <div className="p-10">
            <div className="flex w-auto mb-10">
              <img src="../../../../assets/img/logo/logo.png" alt="" />
              <h1 className="ml-5 text-2xl font-bold tracking-wider">
                ElHakim
              </h1>
            </div>
            <h1 className="my-5 ml-5 text-xl tracking-wider">
              Prescription Details
            </h1>
            <table className="w-full my-5 mt-10 ml-5 border-2 border-collapse border-slate-500">
              <tbody>
                <tr>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    data.
                  </td>
                  <td className="p-3 border-2 border-gray-700">Ammar</td>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    Patient Name
                  </td>
                  <td className="p-3 border-2 border-gray-700">Ahmed</td>
                </tr>
                <tr>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    Age
                  </td>
                  <td className="p-3 border-2 border-gray-700">27</td>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    Email
                  </td>
                  <td className="p-3 border-2 border-gray-700">
                    ahmed@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    Doctor Phone
                  </td>
                  <td className="p-3 border-2 border-gray-700">01144031576</td>
                  <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                    Patient Phone
                  </td>
                  <td className="p-3 border-2 border-gray-700">01555555555</td>
                </tr>
              </tbody>
            </table>
            <h1 className="my-10 ml-5 text-xl tracking-wider">Symptoms</h1>
            <div className="p-5 my-10 ml-5 border-2 border-gray-700">
              At w3schools.com you will learn how to At w3schools.com you will
              learn how toAt w3schools.com you will learn how toAt w3schools.com
              you will learn how toAt w3schools.com you will learn how toAt
              w3schools.com you will learn how tomake a website. They offer free
              tutorials in all web development technologies.
            </div>
            <h1 className="my-5 ml-5 text-xl tracking-wider">Medicines</h1>
            <table className="w-full my-5 mt-10 ml-5 border-2 border-collapse border-slate-500">
              <thead>
                <tr>
                  <th className="p-3 text-xl border-2 border-gray-700 text-extrabold text-start">
                    Drug
                  </th>
                  <th className="p-3 text-xl border-2 border-gray-700 text-extrabold text-start">
                    Dosage
                  </th>
                  <th className="p-3 text-xl border-2 border-gray-700 text-extrabold text-start">
                    Instructions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.medicines.map((item) => {
                  return (
                    <tr key={item}>
                      <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                        {item.drug}
                      </td>
                      <td className="p-3 border-2 border-gray-700">
                        {item.dosage}
                      </td>
                      <td className="p-3 text-xl border-2 border-gray-700 text-extrabold">
                        {item.instructions}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h1 className="my-10 ml-5 text-xl tracking-wider">Prescription</h1>
            <div className="w-full p-5 my-10 ml-5 border-2 border-gray-700">
              At w3schools.com you will learn how to At w3schools.com you will
              learn how toAt w3schools.com you will learn how toAt w3schools.com
              you will learn how toAt w3schools.com you will learn how toAt
              w3schools.com you will learn how tomake a website. They offer free
              tutorials in all web development technologies.
            </div>
          </div>
        </div>

        <ReactToPrint
          trigger={() => {
            return (
              <button className="p-1 px-5 mb-10 ml-20 text-blue-500 bg-blue-100 rounded ">
                Print
              </button>
            );
          }}
          content={() => this.componentRef}
          documentTitle="Prescription"
          pageStyle="print"
        />
      </div>
    );
  }
}
