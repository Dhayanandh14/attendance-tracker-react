import React from 'react';

const Reports = () => {
  return (
    <div>
      Reports
      <button class="btn btn-primary">Monthly Report</button>
      <div className="row">
        <div className="col-md-4">
         <label htmlFor="date-of-join" className="form-label">From Date</label>
          <input type="date" className="form-control" id="date-of-join"/>
        </div>
        <div className="col-md-4">
         <label htmlFor="date-of-join" className="form-label">To Date</label>
          <input type="date" className="form-control" id="date-of-join"/>
        </div>
      </div>
      </div>
  );
}

export default Reports;
