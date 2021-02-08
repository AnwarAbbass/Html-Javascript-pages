
var phoneKind='';
var i=true
while(i)
{
    var phone = prompt('Is your phone apple , samsung ,or hawaii?')
    switch(phone.toLowerCase())
    {
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

document.write(phoneKind);
var number =prompt('how many phones you have ');
var phones='';
for(var g=1;g<number;g++){
    phones =phones+phoneKind ;
}
document.writeln(phones);