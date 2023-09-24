const getStoredJobApplication = () =>{
const storedJobApplication = localStorage.getItem('job-applications');
if(storedJobApplication){
    return JSON.parse(storedJobApplication)
}return [];
}

const saveJobApplication = id => {
    const storedApplications = getStoredJobApplication()
    const existing = storedApplications.find(exId => exId == id);
    !existing && storedApplications.push(id), localStorage.setItem('job-applications', JSON.stringify(storedApplications));
}

const removeJobApplication = id => {
    const storedApplications = getStoredJobApplication()
    const filter = storedApplications.filter(exId => exId !== id);
   localStorage.setItem("job-applications", JSON.stringify(filter));

    
}

export {saveJobApplication,getStoredJobApplication,removeJobApplication}