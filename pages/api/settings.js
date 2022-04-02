// insert settings for requests here
// sample is of a GET request to retrieve all audit logs
const settings = {
    url:'/api/v2/audit_logs?page[size]=100',
    type:'GET',
    dataType: 'json'
};

export default settings;