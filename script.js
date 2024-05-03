const roughToEnglish = {
    A:'O',
    B:'D',
    C:'K',
    D:'B',
    E:'I',
    F:'P',
    G:'Y',
    H:'T',
    I:'E',
    J:'Q',
    K:'C',
    L:'R',
    M:'W',
    N:'U',
    O:'A',
    P:'F',
    Q:'J',
    R:'L',
    S:'Z',
    T:'H',
    U:'N',
    V:'X',
    W:'M',
    X:'V',
    Y:'G',
    Z:'S',
    a:'o',
    b:'d',
    c:'k',
    d:'b',
    e:'i',
    f:'p',
    g:'y',
    h:'t',
    i:'e',
    j:'q',
    k:'c',
    l:'r',
    m:'w',
    n:'u',
    o:'a',
    p:'f',
    q:'j',
    r:'l',
    s:'z',
    t:'h',
    u:'n',
    v:'x',
    w:'m',
    x:'v',
    y:'g',
    z:'s',
}


function roughley(inbox, outbox){
    let inputStr = inbox.value;
    let outputStr = "";
    for (let char of inputStr){
        outputStr += roughToEnglish[char]
    }
    outbox.value = outputStr;
}

