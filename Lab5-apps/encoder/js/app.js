var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        nrzlBits:[],
        nrzmBits:[],
        rzBits:[],
     

        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },

    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },

    methods: {


        encode: function(){
            
            this.encodedBits = getManchesterLevelEncoding(this.bits);
        },

        nrzlEncode: function(){

            this.nrzlBits = NRZL(this.bits);
        },

        nrzmEncode: function(){

            this.nrzmBits = NRZM(this.bits);
        },

        rzEncode: function(){

            this.rzBits = RZ(this.bits);
        },


        allEncodings: function(){

            this.encode();
            this.nrzlEncode();
            this.nrzmEncode();
            this.rzEncode();
        
        },
    }

})


