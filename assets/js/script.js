function getData() {

    // get value from id in html
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let subject = document.getElementById('subject').value;
    let msg = document.getElementById('msg').value;

    if (name,email,phoneNumber,subject,message = "") {
        alert('Tolong data segera diisi')
    } else{
        alert('Data akan segera dikirim melalui email')
    }

    const emailReceive = 'ilhamsetyadji28@gmail.com';
    
    let mailTo = document.createElement('a');
    mailTo.href = `mailto:${emailReceive}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${msg}, bisakah anda menghubungi saya di ${phoneNumber}`
    mailTo.click();

    let show = {
        name,
        email,
        phoneNumer,
        subject,
        msg
    }
    console.log(show);

}

let blogs = []

function getProject(e) {

    e.preventDefault()

    //get id from html
    let projectName = document.getElementById('projectName').value;
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value;
    let desc = document.getElementById('desc').value;
    let upImg = document.getElementById('upFile').files;

    // declare icon technologies
    const tech1 = '<i class="fa-brands fa-node"></i>'
    const tech2 = '<i class="fa-brands fa-react"></i>'
    const tech3 = '<i class="fa-brands fa-python"></i>'
    const tech4 = '<i class="fa-brands fa-golang"></i>'

    //check icon
    let nodeJS = document.getElementById('tech-one').checked ? tech1 : "" ;
    let reactJS = document.getElementById('tech-two').checked ? tech2 : "";
    let python = document.getElementById('tech-three').checked ? tech3 : "";
    let golang = document.getElementById('tech-four').checked ? tech4 : "" ;

    //validation
    if (projectName == "") {
        return alert ('Tolong isi bagian nama projek anda');
    } else if (startDate&&endDate== ""){
        return alert ('Tolong masukkan tanggal yang sesuai');
    } else if (desc == ""){
        return alert('Tolong masukkan deskripsi dengan benar');
    } else if (nodeJS&&reactJS&&python&&golang == ""){
        return alert('Tolong pilh salah satu');
    } else{
        alert('Segera ditampilkan')
    }

    // convert image to blob object
    upImg = URL.createObjectURL(upImg[0])

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    let dataProject = {
        projectName,
        startDate,
        endDate,
        desc,
        upImg,
        nodeJS,
        reactJS,
        python,
        golang
        // author : "Hansen"
        // fakeDate : new Date()
    }

    blogs.push(dataProject);
    console.log(blogs);
    showProject();
}

function showProject() {
    document.getElementById('conten').innerHTML = ""
    for (let i = 0; i <= blogs.length; i++) {
        document.getElementById('conten').innerHTML += 
        `<div class="container-card">
            <main>
                <div class="card-project">
                    <div class="content">
                        <img src=${blogs[i].upImg} alt="image">
                        <a href="add-project-detail.html"><h4>${blogs[i].projectName}</h4></a>
                        <span><p>durasi : 3 bulan</p></span>
                        <div class="text">
                            <p>${blogs[i].desc}</p>
                        </div>

                        <!-- technologies -->
                        <div class="tech">
                            ${blogs[i].nodeJS}
                            ${blogs[i].reactJS}
                            ${blogs[i].python}
                            ${blogs[i].golang}
                        </div>
                        <!-- end-technologies -->
                        
                    </div>
                    
                    <button>edit</button>
                    <button>delete</button>
                </div>
                
            </main>

            <footer>Kosongan</footer>
        </div>
        `
    }
}