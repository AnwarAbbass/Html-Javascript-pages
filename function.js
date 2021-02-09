function PrintImage(phones){
    document.writeln(phones);
}
function numberOfImages(){
    var phoneKind = PhoneKind();
    var number =prompt('how many phones you have ');
    var phones='';
    for(var g=0;g<number;g++){
        phones =phones+phoneKind ;
    }
    PrintImage(phones)
}
function PhoneKind(){
    var phoneKind='';
    var i=true
    while(i){
        var phone = prompt('Is your phone apple , samsung ,or hawaii?')
        switch(phone.toLowerCase()){
            case 'apple':
                phoneKind='<img src="iphone11-red-select-2019.png" />';
                i= false;
                break;
            case 'samsung':
                i= false;
                phoneKind='<img src="samsung.jpg" />'
                break;
            case 'hawaii':
                i= false;
                phoneKind='<img src="hawaii.jpg" />'
                break;
            }
        }
    return phoneKind;
}
numberOfImages();
