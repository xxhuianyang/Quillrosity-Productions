const observer=new IntersectioonObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classlist.add('show');
        } else {
            entry.target.classlist.remove('show');
    }
    });
});

const secElements=document.querySelector('.sec');