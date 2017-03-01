(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.basicModal=n()}}(function(){return function n(t,e,o){function l(c,s){if(!e[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(a)return a(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var u=e[c]={exports:{}};t[c][0].call(u.exports,function(n){var e=t[c][1][n];return l(e?e:n)},u,u.exports,n,t,e,o)}return e[c].exports}for(var a="function"==typeof require&&require,c=0;c<o.length;c++)l(o[c]);return l}({1:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=null,l=(e.THEME={small:"basicModal__small",xclose:"basicModal__xclose"},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t===!0?document.querySelectorAll(".basicModal "+n):document.querySelector(".basicModal "+n)}),a=function(n,t){return null!=n&&(n.constructor===Object?Array.prototype.forEach.call(Object.keys(n),function(e){return t(n[e],e,n)}):Array.prototype.forEach.call(n,function(e,o){return t(e,o,n)}))},c=function(n){return null==n||0===Object.keys(n).length?(console.error("Missing or empty modal configuration object"),!1):(null==n.body&&(n.body=""),null==n.class&&(n.class=""),n.closable!==!1&&(n.closable=!0),null==n.buttons?(console.error("basicModal requires at least one button"),!1):null!=n.buttons.action&&(null==n.buttons.action.class&&(n.buttons.action.class=""),null==n.buttons.action.title&&(n.buttons.action.title="OK"),null==n.buttons.action.fn)?(console.error("Missing fn for action-button"),!1):null==n.buttons.cancel||(null==n.buttons.cancel.class&&(n.buttons.cancel.class=""),null==n.buttons.cancel.title&&(n.buttons.cancel.title="Cancel"),null!=n.buttons.cancel.fn)||(console.error("Missing fn for cancel-button"),!1))},s=function(n){var t='<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M405 136.798l-29.798-29.798-119.202 119.202-119.202-119.202-29.798 29.798 119.202 119.202-119.202 119.202 29.798 29.798 119.202-119.202 119.202 119.202 29.798-29.798-119.202-119.202z"/></svg>',e="";return e+="\n\t        <div class='basicModalContainer basicModalContainer--fadeIn' data-closable='"+n.closable+"'>\n\t            <div class='basicModal basicModal--fadeIn "+n.class+"' role=\"dialog\">\n\t                <div class='basicModal__content'>\n\t                    "+n.body+"\n\t                </div>\n\t                <div class='basicModal__buttons'>\n\t        ",null!=n.buttons.cancel&&(e+=n.buttons.cancel.class.indexOf("basicModal__xclose")===-1?"<a id='basicModal__cancel' class='basicModal__button "+n.buttons.cancel.class+"'>"+n.buttons.cancel.title+"</a>":"<div id='basicModal__cancel' class='basicModal__button "+n.buttons.cancel.class+"' aria-label='close'>"+t+"</div>"),null!=n.buttons.action&&(e+="<a id='basicModal__action' class='basicModal__button "+n.buttons.action.class+"'>"+n.buttons.action.title+"</a>"),e+="\n\t                </div>\n\t            </div>\n\t        </div>\n\t        "},i=e.getValues=function(){var n={},t=l("input[name]",!0),e=l("select[name]",!0);return a(t,function(t){var e=t.getAttribute("name"),o=t.value;n[e]=o}),a(e,function(t){var e=t.getAttribute("name"),o=t.options[t.selectedIndex].value;n[e]=o}),0===Object.keys(n).length?null:n},r=function(n){return null!=n.buttons.cancel&&(l("#basicModal__cancel").onclick=function(){return this.classList.contains("basicModal__button--active")!==!0&&(this.classList.add("basicModal__button--active"),void n.buttons.cancel.fn())}),null!=n.buttons.action&&(l("#basicModal__action").onclick=function(){return this.classList.contains("basicModal__button--active")!==!0&&(this.classList.add("basicModal__button--active"),void n.buttons.action.fn(i()))}),a(l("input",!0),function(n){n.oninput=n.onblur=function(){this.classList.remove("error")}}),a(l("select",!0),function(n){n.onchange=n.onblur=function(){this.classList.remove("error")}}),!0},u=(e.show=function n(t){if(c(t)===!1)return!1;if(null!=l())return b(!0),setTimeout(function(){return n(t)},301),!1;o=document.activeElement;var e=s(t);document.body.insertAdjacentHTML("beforeend",e),r(t);var a=l("input");null!=a&&a.select();var i=l("select");return null==a&&null!=i&&i.focus(),null!=t.callback&&t.callback(t),!0},e.error=function(n){d();var t=l("input[name='"+n+"']")||l("select[name='"+n+"']");return null!=t&&(t.classList.add("error"),"function"==typeof t.select?t.select():t.focus(),l().classList.remove("basicModal--fadeIn","basicModal--shake"),void setTimeout(function(){return l().classList.add("basicModal--shake")},1))},e.visible=function(){return null!=l()}),d=(e.action=function(){var n=l("#basicModal__action");return null!=n&&(n.click(),!0)},e.cancel=function(){var n=l("#basicModal__cancel");return null!=n&&(n.click(),!0)},e.reset=function(){var n=l(".basicModal__button",!0);a(n,function(n){return n.classList.remove("basicModal__button--active")});var t=l("input",!0);a(t,function(n){return n.classList.remove("error")});var e=l("select",!0);return a(e,function(n){return n.classList.remove("error")}),!0}),b=e.close=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(u()===!1)return!1;var t=l().parentElement;return("false"!==t.getAttribute("data-closable")||n!==!1)&&(t.classList.remove("basicModalContainer--fadeIn"),t.classList.add("basicModalContainer--fadeOut"),setTimeout(function(){return null!=t&&(null!=t.parentElement&&void t.parentElement.removeChild(t))},300),null!=o&&(o.focus(),o=null),!0)}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
/**
 * A Javascript object to encode and/or decode html characters using HTML or Numeric entities that handles double or partial encoding
 * Author: R Reid
 * source: http://www.strictly-software.com/htmlencode
 * Licences: GPL, The MIT License (MIT)
 * Copyright: (c) 2011 Robert Reid - Strictly-Software.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * Revision:
 *  2011-07-14, Jacques-Yves Bleau: 
 *       - fixed conversion error with capitalized accentuated characters
 *       + converted arr1 and arr2 to object property to remove redundancy
 *
 * Revision:
 *  2011-11-10, Ce-Yi Hio: 
 *       - fixed conversion error with a number of capitalized entity characters
 *
 * Revision:
 *  2011-11-10, Rob Reid: 
 *		 - changed array format
 *
 * Revision:
 *  2012-09-23, Alex Oss: 
 *		 - replaced string concatonation in numEncode with string builder, push and join for peformance with ammendments by Rob Reid
 *
 * Revision:
 * 2013-01-21, Dan MacTough:
 * 		 - renamed Encoder to module.exports; fixed leaking global in htmlDecode
 */

// Encoder = {
module.exports = {

	// When encoding do we convert characters into html or numerical entities
	EncodeType : "entity",  // entity OR numerical

	isEmpty : function(val){
		if(val){
			return ((val===null) || val.length==0 || /^\s+$/.test(val));
		}else{
			return true;
		}
	},
	
	// arrays for conversion from HTML Entities to Numerical values
	arr1: ['&nbsp;','&iexcl;','&cent;','&pound;','&curren;','&yen;','&brvbar;','&sect;','&uml;','&copy;','&ordf;','&laquo;','&not;','&shy;','&reg;','&macr;','&deg;','&plusmn;','&sup2;','&sup3;','&acute;','&micro;','&para;','&middot;','&cedil;','&sup1;','&ordm;','&raquo;','&frac14;','&frac12;','&frac34;','&iquest;','&Agrave;','&Aacute;','&Acirc;','&Atilde;','&Auml;','&Aring;','&AElig;','&Ccedil;','&Egrave;','&Eacute;','&Ecirc;','&Euml;','&Igrave;','&Iacute;','&Icirc;','&Iuml;','&ETH;','&Ntilde;','&Ograve;','&Oacute;','&Ocirc;','&Otilde;','&Ouml;','&times;','&Oslash;','&Ugrave;','&Uacute;','&Ucirc;','&Uuml;','&Yacute;','&THORN;','&szlig;','&agrave;','&aacute;','&acirc;','&atilde;','&auml;','&aring;','&aelig;','&ccedil;','&egrave;','&eacute;','&ecirc;','&euml;','&igrave;','&iacute;','&icirc;','&iuml;','&eth;','&ntilde;','&ograve;','&oacute;','&ocirc;','&otilde;','&ouml;','&divide;','&oslash;','&ugrave;','&uacute;','&ucirc;','&uuml;','&yacute;','&thorn;','&yuml;','&quot;','&amp;','&lt;','&gt;','&OElig;','&oelig;','&Scaron;','&scaron;','&Yuml;','&circ;','&tilde;','&ensp;','&emsp;','&thinsp;','&zwnj;','&zwj;','&lrm;','&rlm;','&ndash;','&mdash;','&lsquo;','&rsquo;','&sbquo;','&ldquo;','&rdquo;','&bdquo;','&dagger;','&Dagger;','&permil;','&lsaquo;','&rsaquo;','&euro;','&fnof;','&Alpha;','&Beta;','&Gamma;','&Delta;','&Epsilon;','&Zeta;','&Eta;','&Theta;','&Iota;','&Kappa;','&Lambda;','&Mu;','&Nu;','&Xi;','&Omicron;','&Pi;','&Rho;','&Sigma;','&Tau;','&Upsilon;','&Phi;','&Chi;','&Psi;','&Omega;','&alpha;','&beta;','&gamma;','&delta;','&epsilon;','&zeta;','&eta;','&theta;','&iota;','&kappa;','&lambda;','&mu;','&nu;','&xi;','&omicron;','&pi;','&rho;','&sigmaf;','&sigma;','&tau;','&upsilon;','&phi;','&chi;','&psi;','&omega;','&thetasym;','&upsih;','&piv;','&bull;','&hellip;','&prime;','&Prime;','&oline;','&frasl;','&weierp;','&image;','&real;','&trade;','&alefsym;','&larr;','&uarr;','&rarr;','&darr;','&harr;','&crarr;','&lArr;','&uArr;','&rArr;','&dArr;','&hArr;','&forall;','&part;','&exist;','&empty;','&nabla;','&isin;','&notin;','&ni;','&prod;','&sum;','&minus;','&lowast;','&radic;','&prop;','&infin;','&ang;','&and;','&or;','&cap;','&cup;','&int;','&there4;','&sim;','&cong;','&asymp;','&ne;','&equiv;','&le;','&ge;','&sub;','&sup;','&nsub;','&sube;','&supe;','&oplus;','&otimes;','&perp;','&sdot;','&lceil;','&rceil;','&lfloor;','&rfloor;','&lang;','&rang;','&loz;','&spades;','&clubs;','&hearts;','&diams;'],
	arr2: ['&#160;','&#161;','&#162;','&#163;','&#164;','&#165;','&#166;','&#167;','&#168;','&#169;','&#170;','&#171;','&#172;','&#173;','&#174;','&#175;','&#176;','&#177;','&#178;','&#179;','&#180;','&#181;','&#182;','&#183;','&#184;','&#185;','&#186;','&#187;','&#188;','&#189;','&#190;','&#191;','&#192;','&#193;','&#194;','&#195;','&#196;','&#197;','&#198;','&#199;','&#200;','&#201;','&#202;','&#203;','&#204;','&#205;','&#206;','&#207;','&#208;','&#209;','&#210;','&#211;','&#212;','&#213;','&#214;','&#215;','&#216;','&#217;','&#218;','&#219;','&#220;','&#221;','&#222;','&#223;','&#224;','&#225;','&#226;','&#227;','&#228;','&#229;','&#230;','&#231;','&#232;','&#233;','&#234;','&#235;','&#236;','&#237;','&#238;','&#239;','&#240;','&#241;','&#242;','&#243;','&#244;','&#245;','&#246;','&#247;','&#248;','&#249;','&#250;','&#251;','&#252;','&#253;','&#254;','&#255;','&#34;','&#38;','&#60;','&#62;','&#338;','&#339;','&#352;','&#353;','&#376;','&#710;','&#732;','&#8194;','&#8195;','&#8201;','&#8204;','&#8205;','&#8206;','&#8207;','&#8211;','&#8212;','&#8216;','&#8217;','&#8218;','&#8220;','&#8221;','&#8222;','&#8224;','&#8225;','&#8240;','&#8249;','&#8250;','&#8364;','&#402;','&#913;','&#914;','&#915;','&#916;','&#917;','&#918;','&#919;','&#920;','&#921;','&#922;','&#923;','&#924;','&#925;','&#926;','&#927;','&#928;','&#929;','&#931;','&#932;','&#933;','&#934;','&#935;','&#936;','&#937;','&#945;','&#946;','&#947;','&#948;','&#949;','&#950;','&#951;','&#952;','&#953;','&#954;','&#955;','&#956;','&#957;','&#958;','&#959;','&#960;','&#961;','&#962;','&#963;','&#964;','&#965;','&#966;','&#967;','&#968;','&#969;','&#977;','&#978;','&#982;','&#8226;','&#8230;','&#8242;','&#8243;','&#8254;','&#8260;','&#8472;','&#8465;','&#8476;','&#8482;','&#8501;','&#8592;','&#8593;','&#8594;','&#8595;','&#8596;','&#8629;','&#8656;','&#8657;','&#8658;','&#8659;','&#8660;','&#8704;','&#8706;','&#8707;','&#8709;','&#8711;','&#8712;','&#8713;','&#8715;','&#8719;','&#8721;','&#8722;','&#8727;','&#8730;','&#8733;','&#8734;','&#8736;','&#8743;','&#8744;','&#8745;','&#8746;','&#8747;','&#8756;','&#8764;','&#8773;','&#8776;','&#8800;','&#8801;','&#8804;','&#8805;','&#8834;','&#8835;','&#8836;','&#8838;','&#8839;','&#8853;','&#8855;','&#8869;','&#8901;','&#8968;','&#8969;','&#8970;','&#8971;','&#9001;','&#9002;','&#9674;','&#9824;','&#9827;','&#9829;','&#9830;'],
		
	// Convert HTML entities into numerical entities
	HTML2Numerical : function(s){
		return this.swapArrayVals(s,this.arr1,this.arr2);
	},	

	// Convert Numerical entities into HTML entities
	NumericalToHTML : function(s){
		return this.swapArrayVals(s,this.arr2,this.arr1);
	},


	// Numerically encodes all unicode characters
	numEncode : function(s){ 
		if(this.isEmpty(s)) return ""; 

		var a = [],
			l = s.length; 
		
		for (var i=0;i<l;i++){ 
			var c = s.charAt(i); 
			if (c < " " || c > "~"){ 
				a.push("&#"); 
				a.push(c.charCodeAt()); //numeric value of code point 
				a.push(";"); 
			}else{ 
				a.push(c); 
			} 
		} 
		
		return a.join(""); 	
	}, 
	
	// HTML Decode numerical and HTML entities back to original values
	htmlDecode : function(s){

		var c,m,d = s;
		var arr;
		
		if(this.isEmpty(d)) return "";

		// convert HTML entites back to numerical entites first
		d = this.HTML2Numerical(d);
		
		// look for numerical entities &#34;
		arr=d.match(/&#[0-9]{1,5};/g);
		
		// if no matches found in string then skip
		if(arr!=null){
			for(var x=0;x<arr.length;x++){
				m = arr[x];
				c = m.substring(2,m.length-1); //get numeric part which is refernce to unicode character
				// if its a valid number we can decode
				if(c >= -32768 && c <= 65535){
					// decode every single match within string
					d = d.replace(m, String.fromCharCode(c));
				}else{
					d = d.replace(m, ""); //invalid so replace with nada
				}
			}			
		}

		return d;
	},		

	// encode an input string into either numerical or HTML entities
	htmlEncode : function(s,dbl){
			
		if(this.isEmpty(s)) return "";

		// do we allow double encoding? E.g will &amp; be turned into &amp;amp;
		dbl = dbl || false; //default to prevent double encoding
		
		// if allowing double encoding we do ampersands first
		if(dbl){
			if(this.EncodeType=="numerical"){
				s = s.replace(/&/g, "&#38;");
			}else{
				s = s.replace(/&/g, "&amp;");
			}
		}

		// convert the xss chars to numerical entities ' " < >
		s = this.XSSEncode(s,false);
		
		if(this.EncodeType=="numerical" || !dbl){
			// Now call function that will convert any HTML entities to numerical codes
			s = this.HTML2Numerical(s);
		}

		// Now encode all chars above 127 e.g unicode
		s = this.numEncode(s);

		// now we know anything that needs to be encoded has been converted to numerical entities we
		// can encode any ampersands & that are not part of encoded entities
		// to handle the fact that I need to do a negative check and handle multiple ampersands &&&
		// I am going to use a placeholder

		// if we don't want double encoded entities we ignore the & in existing entities
		if(!dbl){
			s = s.replace(/&#/g,"##AMPHASH##");
		
			if(this.EncodeType=="numerical"){
				s = s.replace(/&/g, "&#38;");
			}else{
				s = s.replace(/&/g, "&amp;");
			}

			s = s.replace(/##AMPHASH##/g,"&#");
		}
		
		// replace any malformed entities
		s = s.replace(/&#\d*([^\d;]|$)/g, "$1");

		if(!dbl){
			// safety check to correct any double encoded &amp;
			s = this.correctEncoding(s);
		}

		// now do we need to convert our numerical encoded string into entities
		if(this.EncodeType=="entity"){
			s = this.NumericalToHTML(s);
		}

		return s;					
	},

	// Encodes the basic 4 characters used to malform HTML in XSS hacks
	XSSEncode : function(s,en){
		if(!this.isEmpty(s)){
			en = en || true;
			// do we convert to numerical or html entity?
			if(en){
				s = s.replace(/\'/g,"&#39;"); //no HTML equivalent as &apos is not cross browser supported
				s = s.replace(/\"/g,"&quot;");
				s = s.replace(/</g,"&lt;");
				s = s.replace(/>/g,"&gt;");
			}else{
				s = s.replace(/\'/g,"&#39;"); //no HTML equivalent as &apos is not cross browser supported
				s = s.replace(/\"/g,"&#34;");
				s = s.replace(/</g,"&#60;");
				s = s.replace(/>/g,"&#62;");
			}
			return s;
		}else{
			return "";
		}
	},

	// returns true if a string contains html or numerical encoded entities
	hasEncoded : function(s){
		if(/&#[0-9]{1,5};/g.test(s)){
			return true;
		}else if(/&[A-Z]{2,6};/gi.test(s)){
			return true;
		}else{
			return false;
		}
	},

	// will remove any unicode characters
	stripUnicode : function(s){
		return s.replace(/[^\x20-\x7E]/g,"");
		
	},

	// corrects any double encoded &amp; entities e.g &amp;amp;
	correctEncoding : function(s){
		return s.replace(/(&amp;)(amp;)+/,"$1");
	},


	// Function to loop through an array swaping each item with the value from another array e.g swap HTML entities with Numericals
	swapArrayVals : function(s,arr1,arr2){
		if(this.isEmpty(s)) return "";
		var re;
		if(arr1 && arr2){
			//ShowDebug("in swapArrayVals arr1.length = " + arr1.length + " arr2.length = " + arr2.length)
			// array lengths must match
			if(arr1.length == arr2.length){
				for(var x=0,i=arr1.length;x<i;x++){
					re = new RegExp(arr1[x], 'g');
					s = s.replace(re,arr2[x]); //swap arr1 item with matching item from arr2	
				}
			}
		}
		return s;
	},

	inArray : function( item, arr ) {
		for ( var i = 0, x = arr.length; i < x; i++ ){
			if ( arr[i] === item ){
				return i;
			}
		}
		return -1;
	}

}
},{}],3:[function(require,module,exports){
/*!
 * node-htmlencode - Wrapped version of http://www.strictly-software.com/htmlencode
 * Copyright(c) 2013 Dan MacTough <danmactough@gmail.com>
 * All rights reserved.
 */

var htmlencode = require('./encoder')
  , extend = require('util')._extend;

var Encoder = function (type) {
  if (type) this.EncodeType = type;
  return this;
};
extend(Encoder.prototype, htmlencode);

var it = new Encoder();

Object.defineProperty(module.exports, 'EncodeType', {
  enumerable: true,
  get: function () { return it.EncodeType; },
  set: function (val) { return it.EncodeType = val; }
});
[ 'HTML2Numerical',
  'NumericalToHTML',
  'numEncode',
  'htmlDecode',
  'htmlEncode',
  'XSSEncode',
  'hasEncoded',
  'stripUnicode',
  'correctEncoding'].forEach(function (method) {
  module.exports[method] = it[method].bind(it);
});
module.exports.Encoder = Encoder;

},{"./encoder":2,"util":7}],4:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],5:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],6:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],7:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":6,"_process":4,"inherits":5}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAsideContainer;

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

var _clickBtnOpen = require('../events/clickBtnOpen');

var _clickBtnOpen2 = _interopRequireDefault(_clickBtnOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAsideContainer() {
  document.body.appendChild((0, _createElement2.default)({
    tagName: 'div',
    className: 'w-aside-container',
    childs: [{
      tagName: 'button',
      className: 'w-btn-open fa fa-angle-left',
      on: {
        click: _clickBtnOpen2.default
      }
    }, {
      tagName: 'div',
      className: 'w-tabs'
    }]
  }));
}

},{"../events/clickBtnOpen":23,"../utils/createElement":32}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAsideContentsContainer;

var _createSelectorContents = require('./createSelectorContents');

var _createSelectorContents2 = _interopRequireDefault(_createSelectorContents);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAsideContentsContainer(contents, urls) {
  var asideContainer = document.querySelector('.w-aside-container');

  asideContainer.appendChild((0, _createElement2.default)({
    tagName: 'div',
    className: 'w-tab-content',
    childs: [contents.length > 1 ? (0, _createSelectorContents2.default)(urls) : '', {
      tagName: 'div',
      className: 'w-contents-container',
      childs: contents.map(function (content, i) {
        return (0, _createElement2.default)({
          tagName: 'div',
          className: 'w-list-contents' + (i !== 0 ? ' w-hide' : ''),
          html: content,
          attributes: {
            'data-index': i
          }
        });
      })
    }]
  }));

  asideContainer.querySelector('.w-tabs').appendChild((0, _createElement2.default)({
    tagName: 'a',
    className: 'w-tab-link',
    attributes: {
      id: 'wTabContents'
    },
    text: 'Contents'
  }));
}

},{"../utils/createElement":32,"./createSelectorContents":15}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAsideStructuresContainer;

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAsideStructuresContainer(structures, urls) {
  var asideContainer = document.querySelector('.w-aside-container');

  asideContainer.appendChild((0, _createElement2.default)({
    tagName: 'div',
    className: 'w-tab-content',
    childs: [{
      tagName: 'div',
      className: 'w-structures-container',
      childs: structures.map(function (structure, i) {
        return (0, _createElement2.default)({
          tagName: 'div',
          className: 'w-list-structures' + (i !== 0 ? ' w-hide' : ''),
          html: structure,
          attributes: {
            'data-index': i
          }
        });
      })
    }]
  }));

  asideContainer.querySelector('.w-tabs').appendChild((0, _createElement2.default)({
    tagName: 'a',
    className: 'w-tab-link',
    attributes: {
      id: 'wTabStructures'
    },
    text: 'Structures'
  }));
}

},{"../utils/createElement":32}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBarActions;

var _clickBtnViewPort = require('../events/clickBtnViewPort');

var _clickBtnViewPort2 = _interopRequireDefault(_clickBtnViewPort);

var _clickBtnDropdown = require('../events/clickBtnDropdown');

var _clickBtnDropdown2 = _interopRequireDefault(_clickBtnDropdown);

var _blurBtnDropdown = require('../events/blurBtnDropdown');

var _blurBtnDropdown2 = _interopRequireDefault(_blurBtnDropdown);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBarActions() {
  var viewports = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  document.body.appendChild((0, _createElement2.default)({
    tagName: 'div',
    className: 'w-bar-container',
    childs: [{
      tagName: 'ul',
      childs: [createListViewports(viewports), createListActions(actions)]
    }]
  }));
}

function createListViewports(viewports) {
  if (viewports.length > 0) {
    var elViewports = viewports.map(function (viewport) {
      var settings = {
        width: viewport.width.replace('px', '') || '',
        height: viewport.height.replace('px', '') || ''
      };
      return (0, _createElement2.default)({
        tagName: 'li',
        childs: [{
          tagName: 'button',
          html: viewport.label,
          className: 'w-btn-viewport',
          on: {
            click: (0, _clickBtnViewPort2.default)(settings)
          }
        }]
      });
    });

    return createElementLabelBarAction('Viewports <i class="fa fa-angle-down"></i>', elViewports);
  }
}

function createListActions(actions, container) {
  if (actions.length > 0) {
    var elActions = actions.map(function (action) {
      return (0, _createElement2.default)({
        tagName: 'li',
        childs: [{
          tagName: 'button',
          className: 'w-btn ' + (action.class || ''),
          html: action.label,
          attributes: {
            id: action.id
          },
          on: {
            click: action.fn
          }
        }]
      });
    });

    return createElementLabelBarAction('Actions <i class="fa fa-angle-down"></i>', elActions);
  }
}

function createElementLabelBarAction(label, nodes) {
  return (0, _createElement2.default)({
    tagName: 'li',
    childs: [{
      tagName: 'button',
      className: 'w-btn-dropdown',
      html: label,
      on: {
        click: _clickBtnDropdown2.default,
        blur: _blurBtnDropdown2.default
      }
    }, {
      tagName: 'ul',
      childs: nodes
    }]
  });
}

},{"../events/blurBtnDropdown":17,"../events/clickBtnDropdown":20,"../events/clickBtnViewPort":24,"../utils/createElement":32}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createContentActions;

var _clickBtnDelete = require('../events/clickBtnDelete');

var _clickBtnDelete2 = _interopRequireDefault(_clickBtnDelete);

var _clickBtnDuplicate = require('../events/clickBtnDuplicate');

var _clickBtnDuplicate2 = _interopRequireDefault(_clickBtnDuplicate);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContentActions(editor) {
  return (0, _createElement2.default)({
    tagName: 'div',
    className: 'w-actions',
    childs: [{
      tagName: 'button',
      className: 'w-btn-move fa fa-arrows'
    }, {
      tagName: 'button',
      className: 'w-btn-delete fa fa-trash',
      on: {
        click: _clickBtnDelete2.default
      }
    }, {
      tagName: 'button',
      className: 'w-btn-duplicate fa fa-plus',
      on: {
        click: (0, _clickBtnDuplicate2.default)(editor)
      }
    }]
  });
}

},{"../events/clickBtnDelete":19,"../events/clickBtnDuplicate":21,"../utils/createElement":32}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createContentContainer;

var _createContentActions = require('./createContentActions');

var _createContentActions2 = _interopRequireDefault(_createContentActions);

var _clickContent = require('../events/clickContent');

var _clickContent2 = _interopRequireDefault(_clickContent);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContentContainer(content, editor) {
  return (0, _createElement2.default)({
    tagName: 'div',
    className: 'w-content-container',
    on: {
      click: _clickContent2.default
    },
    childs: [(0, _createContentActions2.default)(editor), content]
  });
}

},{"../events/clickContent":25,"../utils/createElement":32,"./createContentActions":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createContentsContainer;

var _clickBtnEditContents = require('../events/clickBtnEditContents');

var _clickBtnEditContents2 = _interopRequireDefault(_clickBtnEditContents);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContentsContainer(container, editor) {
  container.appendChild((0, _createElement2.default)({
    tagName: 'div',
    className: 'w-contents-bar',
    childs: [{
      tagName: 'button',
      className: 'w-btn-edit fa fa-code',
      on: {
        click: (0, _clickBtnEditContents2.default)(editor)
      }
    }]
  }));
}

},{"../events/clickBtnEditContents":22,"../utils/createElement":32}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSelectorContentss;

var _changeListContents = require('../events/changeListContents');

var _changeListContents2 = _interopRequireDefault(_changeListContents);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSelectorContentss(urls) {
  return (0, _createElement2.default)({
    tagName: 'select',
    on: {
      change: _changeListContents2.default
    },
    childs: urls.map(function (url, n) {
      return (0, _createElement2.default)({
        tagName: 'option',
        attributes: {
          value: n
        },
        text: url.label || 'List ' + n
      });
    })
  });
}

},{"../events/changeListContents":18,"../utils/createElement":32}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dragNdrop;

var _createContentContainer = require('./components/createContentContainer');

var _createContentContainer2 = _interopRequireDefault(_createContentContainer);

var _createContentsContainer = require('./components/createContentsContainer');

var _createContentsContainer2 = _interopRequireDefault(_createContentsContainer);

var _slice = require('./utils/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dragNdrop(primaryContainers, editor) {
  var dragContents = null;var dragStructures = null;
  var listStructures = (0, _slice2.default)(document.querySelectorAll('.w-list-structures'));
  var listContents = (0, _slice2.default)(document.querySelectorAll('.w-list-contents'));

  listStructures = listStructures.concat(primaryContainers);
  listContents = listContents.concat((0, _slice2.default)(document.querySelectorAll('.w-contents')));

  dragContents = dragula(listContents, {
    copy: function copy(el, source) {
      return source.classList.contains('w-list-contents');
    },
    accepts: function accepts(el, target) {
      return !target.classList.contains('w-list-contents');
    },
    moves: function moves(e, container, handle) {
      if (container.classList.contains('w-contents')) {
        return handle.classList.contains('w-btn-move');
      }
      return container.classList.contains('w-list-contents');
    }
  }).on('drag', function (el, container) {
    var contentsContainer = (0, _slice2.default)(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(function (elem) {
      return elem.classList.add('w-hover');
    });
  }).on('drop', function (el, container) {
    var contentsContainer = (0, _slice2.default)(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(function (elem) {
      return elem.classList.remove('w-hover');
    });

    if (el.querySelectorAll('.w-actions').length > 0) return;

    if (container && container.classList.contains('w-contents')) {
      var parent = el.parentNode;
      var newEl = el.cloneNode(true);
      var content = newEl.querySelector('.w-content');

      if (content) {
        content.className += ' editable';
        parent.replaceChild((0, _createContentContainer2.default)(content, editor), el);
        editor.destroy();
        editor.setup();
      }
    }
  }).on('cancel', function (el, container) {
    var contentsContainer = (0, _slice2.default)(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(function (elem) {
      return elem.classList.remove('w-hover');
    });
  });

  dragStructures = dragula(listStructures, {
    copy: function copy(el, source) {
      return source.classList.contains('w-list-structures');
    },
    accepts: function accepts(el, target) {
      return !target.classList.contains('w-list-structures');
    },
    moves: function moves(e, container, handle) {
      return container.classList.contains('w-list-structures');
    }
  }).on('drag', function (el, container) {
    primaryContainers.forEach(function (elem) {
      return elem.classList.add('w-hover');
    });
  }).on('drop', function (el, container) {
    primaryContainers.forEach(function (elem) {
      return elem.classList.remove('w-hover');
    });

    if (container) {
      var parent = el.parentNode;
      var newEl = el.cloneNode(true);
      var structure = newEl.querySelector('.w-structure');

      if (structure) {
        var contents = (0, _slice2.default)(structure.querySelectorAll('.w-contents'));

        parent.replaceChild(structure, el);
        (0, _createContentsContainer2.default)(structure, editor);
        contents.forEach(function (content) {
          return dragContents.containers.push(content);
        });
      }
    }
  }).on('cancel', function (el, container) {
    primaryContainers.forEach(function (elem) {
      return elem.classList.remove('w-hover');
    });
  });
}

},{"./components/createContentContainer":13,"./components/createContentsContainer":14,"./utils/slice":36}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  setTimeout(function () {
    e.target.parentNode.classList.remove('w-btn-focus');
  }, 300);
};

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeSnippetsList;

var _slice = require('../utils/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function changeSnippetsList() {
  var index = this.value;
  var lists = (0, _slice2.default)(document.querySelectorAll('.w-list-snippets'));

  lists.forEach(function (list) {
    if (list.getAttribute('data-index') == index) {
      list.classList.remove('w-hide');
    } else {
      list.classList.add('w-hide');
    }
  });
}

},{"../utils/slice":36}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  var parent = (0, _getClosest2.default)(e.target, '.w-content-container');

  basicModal.show({
    body: '<p><strong>Are you sure ?</strong></p>',
    buttons: {
      cancel: {
        title: 'Cancel',
        fn: basicModal.close
      },
      action: {
        title: 'Continue',
        fn: function fn() {
          parent.remove();
          basicModal.close();
        }
      }
    }
  });
};

var _getClosest = require('../utils/getClosest');

var _getClosest2 = _interopRequireDefault(_getClosest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicModal = require('basicmodal');

},{"../utils/getClosest":33,"basicmodal":1}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  e.preventDefault();
  var parent = e.target.parentNode;
  var isFocused = parent.classList.contains('w-btn-focus');
  var btnFocus = (0, _slice2.default)(document.querySelectorAll('.w-btn-focus'));

  btnFocus.forEach(function (btn) {
    return btn.classList.remove('w-btn-focus');
  });
  parent.classList[isFocused ? 'remove' : 'add']('w-btn-focus');
};

var _slice = require('../utils/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../utils/slice":36}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editor) {
  return function (e) {
    var newParent = null;
    var parent = (0, _getClosest2.default)(e.target, '.w-content-container');
    var content = parent.querySelector('.w-content');
    var html = content.innerHTML;
    var divSnippet = (0, _createElement2.default)({
      tagName: 'div',
      className: 'w-content editable',
      html: html
    });

    newParent = (0, _createContentContainer2.default)(divSnippet, editor);
    (0, _insertAfter2.default)(newParent, parent);
    editor.destroy();
    editor.setup();
  };
};

var _createContentContainer = require('../components/createContentContainer');

var _createContentContainer2 = _interopRequireDefault(_createContentContainer);

var _getClosest = require('../utils/getClosest');

var _getClosest2 = _interopRequireDefault(_getClosest);

var _insertAfter = require('../utils/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../components/createContentContainer":13,"../utils/createElement":32,"../utils/getClosest":33,"../utils/insertAfter":35}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (editor) {
  return function (e) {
    var parent = (0, _getClosest2.default)(e.target, '.w-structure');
    var container = parent.querySelector('.w-contents');
    var content = (0, _getContents2.default)(container, true);

    basicModal.show({
      body: '<textarea>' + content + '</textarea>',
      class: 'modal-edit-contents',
      buttons: {
        cancel: {
          title: 'Cancel',
          fn: basicModal.close
        },
        action: {
          title: 'Save',
          fn: saveEditContents
        }
      }
    });

    if (basicModal.visible()) {
      var textarea = document.getElementsByTagName('textarea')[0];
      var editorHtml = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'htmlmixed',
        tabSize: '2'
      });

      document.getElementById('basicModal__action').addEventListener('replaceContent', (0, _replaceContent2.default)(container, editorHtml, editor));
    }
  };
};

var _replaceContent = require('./replaceContent');

var _replaceContent2 = _interopRequireDefault(_replaceContent);

var _getContents = require('../utils/getContents');

var _getContents2 = _interopRequireDefault(_getContents);

var _getClosest = require('../utils/getClosest');

var _getClosest2 = _interopRequireDefault(_getClosest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveEditContents() {
  var elem = document.getElementById('basicModal__action');
  var event = new CustomEvent('replaceContent');

  elem.dispatchEvent(event);
  basicModal.close();
}

},{"../utils/getClosest":33,"../utils/getContents":34,"./replaceContent":27}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var btnOpenClass = this.classList;
  var container = this.parentNode;

  btnOpenClass.toggle('in');
  container.classList.toggle('in');

  if (btnOpenClass.contains('in')) {
    btnOpenClass.remove('fa-angle-left');
    btnOpenClass.add('fa-angle-right');
  } else {
    btnOpenClass.remove('fa-angle-right');
    btnOpenClass.add('fa-angle-left');
  }
};

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clickBtnViewPort;
function popupSettings(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '700';

  return 'height=' + height + ', width=' + width + ', top=100, left=' + width / 2 + ', toolbar=no, menubar=no, location=no, resizable=no, scrollbars=yes, status=no';
}

function clickBtnViewPort(settings) {
  var width = settings.width,
      height = settings.height;


  return function (e) {
    var pop = window.open(document.location.href, 'viewRender', popupSettings(width, height));
  };
}

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  e.stopPropagation();
  var parent = (0, _getClosest2.default)(e.target, '.w-content-container');
  var elemsFocus = (0, _slice2.default)(document.querySelectorAll('.w-focus'));

  elemsFocus.forEach(function (elemFocus) {
    elemFocus.classList.remove('w-focus');
  });
  parent.classList.add('w-focus');
};

var _slice = require('../utils/slice');

var _slice2 = _interopRequireDefault(_slice);

var _getClosest = require('../utils/getClosest');

var _getClosest2 = _interopRequireDefault(_getClosest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../utils/getClosest":33,"../utils/slice":36}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e) {
  var elemsFocus = (0, _slice2.default)(document.querySelectorAll('.w-focus'));

  elemsFocus.forEach(function (elemFocus) {
    elemFocus.classList.remove('w-focus');
  });
};

var _slice = require('../utils/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../utils/slice":36}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (container, editorHtml, editor) {
  return function () {
    var editorContent = editorHtml.getValue();
    var divTemp = (0, _createElement2.default)({
      tagName: 'div',
      html: editorContent
    });

    container.innerHTML = '';
    divTemp.childNodes.forEach(function (node) {
      var newElem = node.cloneNode(true);

      if (newElem.tagName) {
        if (node.tagName != 'DIV') {
          newElem = (0, _createElement2.default)({
            tagName: 'div',
            childs: [node]
          });
        }
        newElem.classList.add('w-content');
        newElem.classList.add('editable');

        var newContent = (0, _createContentContainer2.default)(newElem);

        container.appendChild(newContent);
        editor.destroy();
        editor.setup();
      }
    });
  };
};

var _createContentContainer = require('../components/createContentContainer');

var _createContentContainer2 = _interopRequireDefault(_createContentContainer);

var _createElement = require('../utils/createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"../components/createContentContainer":13,"../utils/createElement":32}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (containerId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var urls = [];var contentsUrls = [];var structuresUrls = [];
  var editorOptions = options.editorOptions,
      contentsPath = options.contentsPath,
      structuresPath = options.structuresPath,
      viewports = options.viewports,
      buttons = options.buttons;


  var primaryContainers = (0, _slice2.default)(document.querySelectorAll(containerId));
  var editorMedium = (0, _initMediumEditor2.default)(editorOptions);

  if (contentsPath && structuresPath) {
    (0, _createAsideContainer2.default)();

    contentsUrls = Array.isArray(contentsPath) ? contentsPath : [contentsPath];
    contentsUrls = contentsUrls.map(function (u) {
      return { url: u.url || u, label: u.label || '' };
    });
    structuresUrls = Array.isArray(structuresPath) ? structuresPath : [structuresPath];
    structuresUrls = structuresUrls.map(function (u) {
      return { url: u.url || u, label: u.label || '' };
    });

    var contentsPromise = Promise.all(contentsUrls.map(function (u) {
      return fetch(u.url, { method: 'GET', mode: 'cors' });
    })).then(function (responses) {
      return Promise.all(responses.map(function (res) {
        return res.text();
      })).then(function (contents) {
        //createContentsContainer(primaryContainers, editorMedium);
        (0, _createAsideContentsContainer2.default)(contents, contentsUrls);
      }).catch(function (response) {
        return console.log(response);
      });
    });

    var structuresPromise = Promise.all(structuresUrls.map(function (u) {
      return fetch(u.url, { method: 'GET', mode: 'cors' });
    })).then(function (responses) {
      return Promise.all(responses.map(function (res) {
        return res.text();
      })).then(function (structures) {
        (0, _createAsideStructuresContainer2.default)(structures, structuresUrls);
      }).catch(function (response) {
        return console.log(response);
      });
    });

    Promise.all([contentsPromise, structuresPromise]).then(function () {
      (0, _createBarActions2.default)(viewports, buttons);
      (0, _dragNDrop2.default)(primaryContainers, editorMedium);
      document.addEventListener('click', _clickDocument2.default);
    });

    return {
      exportHtml: function exportHtml() {
        var container = document.body;

        return (0, _getContents2.default)(container);
      }
    };
  } else {
    new Error('snippets path missing');
  }
};

var _createContentsContainer = require('./components/createContentsContainer');

var _createContentsContainer2 = _interopRequireDefault(_createContentsContainer);

var _createBarActions = require('./components/createBarActions');

var _createBarActions2 = _interopRequireDefault(_createBarActions);

var _createAsideContentsContainer = require('./components/createAsideContentsContainer');

var _createAsideContentsContainer2 = _interopRequireDefault(_createAsideContentsContainer);

var _createAsideStructuresContainer = require('./components/createAsideStructuresContainer');

var _createAsideStructuresContainer2 = _interopRequireDefault(_createAsideStructuresContainer);

var _createAsideContainer = require('./components/createAsideContainer');

var _createAsideContainer2 = _interopRequireDefault(_createAsideContainer);

var _dragNDrop = require('./dragNDrop');

var _dragNDrop2 = _interopRequireDefault(_dragNDrop);

var _initMediumEditor = require('./initMediumEditor');

var _initMediumEditor2 = _interopRequireDefault(_initMediumEditor);

var _getContents = require('./utils/getContents');

var _getContents2 = _interopRequireDefault(_getContents);

var _slice = require('./utils/slice');

var _slice2 = _interopRequireDefault(_slice);

var _clickDocument = require('./events/clickDocument');

var _clickDocument2 = _interopRequireDefault(_clickDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./components/createAsideContainer":8,"./components/createAsideContentsContainer":9,"./components/createAsideStructuresContainer":10,"./components/createBarActions":11,"./components/createContentsContainer":14,"./dragNDrop":16,"./events/clickDocument":26,"./initMediumEditor":29,"./utils/getContents":34,"./utils/slice":36}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  return new MediumEditor('.w-content.editable', options || editorOptionsDefault);
};

var editorOptionsDefault = {
  buttonLabels: 'fontawesome',
  toolbar: {
    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'fontsize', 'fontname', 'anchor', 'image', 'quote', 'justifyLeft', 'justifyRight', 'justifyCenter', 'h1', 'h2', 'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'removeFormat']
  }
};

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (containerId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var documentParent = window.opener.document;
  var containersParent = (0, _slice2.default)(documentParent.querySelectorAll(containerId));
  var containers = (0, _slice2.default)(document.querySelectorAll(containerId));

  containersParent.forEach(function (containerParent, i) {
    var contents = (0, _getContents2.default)(containerParent.querySelector('.w-contents'), false);

    containers[i].innerHTML = contents;
  });
};

var _getContents = require('./utils/getContents');

var _getContents2 = _interopRequireDefault(_getContents);

var _slice = require('./utils/slice');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./utils/getContents":34,"./utils/slice":36}],31:[function(require,module,exports){
'use strict';

var _initEdit = require('./initEdit');

var _initEdit2 = _interopRequireDefault(_initEdit);

var _initRender = require('./initRender');

var _initRender2 = _interopRequireDefault(_initRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (window) {
  window.WebEdit = window.opener ? _initRender2.default : _initEdit2.default;
}

},{"./initEdit":28,"./initRender":30}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createElement;
function createElement(options) {
  var el = void 0;
  var tagName = options.tagName,
      className = options.className,
      attributes = options.attributes,
      on = options.on,
      html = options.html,
      text = options.text,
      childs = options.childs;


  if (!tagName) {
    el = document.createDocumentFragment();
  } else {
    el = document.createElement(tagName);

    if (className) {
      el.className = className;
    }

    if (attributes) {
      for (var attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
      }
    }

    if (html !== undefined) {
      el.innerHTML = html;
    }
  }

  if (on) {
    for (var e in on) {
      el.addEventListener(e, on[e]);
    }
  }

  if (text) {
    el.appendChild(document.createTextNode(text));
  }

  if (window.HTMLElement === undefined) {
    window.HTMLElement = Element;
  }

  if (childs && childs.length) {
    childs.forEach(function (child) {
      return el.appendChild(child instanceof window.HTMLElement ? child : createElement(child));
    });
  }

  return el;
}

},{}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getClosest;
/**
 * Get the closest matching element up the DOM tree.
 * @private
 * @param  {Element} elem     Starting element
 * @param  {String}  selector Selector to match against
 * @return {Boolean|Element}  Returns null if not match found
 */
function getClosest(elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }

    return null;
};

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getContents;
var htmlEncode = require('htmlencode').htmlEncode;

function getContents(primaryContainer) {
  var encoded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var result = '';

  var primaryContainerClone = primaryContainer.cloneNode(true);

  primaryContainerClone.childNodes.forEach(function (elem) {
    if (elem.classList.contains('w-content-container')) {
      var snippet = elem.querySelector('.w-content');

      result += '\n<div>\n\t' + snippet.innerHTML.trim() + '\n</div>\n';
    } else {
      var divTemp = document.createElement('div');
      var newElem = elem.cloneNode(true);

      divTemp.appendChild(newElem);
      result += divTemp.innerHTML;
    }
  });

  return encoded ? htmlEncode(result) : result;
}

},{"htmlencode":3}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertAfter;
function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slice;
function slice(arr) {
  return [].slice.call(arr);
}

},{}]},{},[31]);
