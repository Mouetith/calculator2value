function myAdd() {
    var a,b,s;
    a=parseFloat(document.f.tfa.value );
    b=parseFloat(document.f.tfb.value);
    
    s=a+b;
    document.f.tfr.value=s;  
}
function myOdd() {
    var a,b,s;
    a=parseFloat(document.f.tfa.value );
    b=parseFloat(document.f.tfb.value);
    
    s=a-b;
    document.f.tfr.value=s;  
}
function myMuti() {
    var a,b,s;
    a=parseFloat(document.f.tfa.value );
    b=parseFloat(document.f.tfb.value);
    
    s=a*b;
    document.f.tfr.value=s;  
}
function myDivi() {
    var a,b,s;
    a=parseFloat(document.f.tfa.value );
    b=parseFloat(document.f.tfb.value);
    
    s=a/b;
    document.f.tfr.value=s;  
}