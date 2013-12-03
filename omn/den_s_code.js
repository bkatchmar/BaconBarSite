/* SiteCatalyst code version: H.20.3.
 * Copyright 1997-2009 Omniture, Inc. More info available at
 * http://www.omniture.com
 * Denihan Hospitality Group main site
*/

var s_account = (typeof s_account != 'undefined') ? s_account : 'dhgdenihan';


// Config:
var denOmn = {

	// JS Requirements:
	'globalUrl':				'http://www.denihan.com/omn/glo_s_code.js',
	'globalSecureUrl':			'https://www.denihan.com/omn/glo_s_code.js',
	'siteCode':					'den',
	'lastLocalUpate':			'09.13.2011',
    'server':                   'www.denihan.com',
	// Last edit: ROIL|PCL
	
	// Global Config Overwrite:
	
	// Global variable overwrite / defaults
	
	// --------------------------------------------
	// do not change the following, JS dependencies
	// --------------------------------------------
	'thisHost': 	(typeof window.location.host !== 'undefined') ? window.location.host.toLowerCase() : '',
	'thisPathName': (typeof window.location.pathname !== 'undefined') ? window.location.pathname.toLowerCase() : '',
	'thisSearch': 	(typeof window.location.search !== 'undefined') ? window.location.search.toLowerCase() : '',
	'thisProtocol': (typeof window.location.protocol !== 'undefined') ? window.location.protocol.toLowerCase() : ''
};

if(typeof denOmnDev != 'undefined' && (typeof jQuery == 'object' || typeof jQuery == 'function')) {
	jQuery.extend(true, denOmn, denOmnDev);
}

var denOmnTranslation = { 

}

function local_den_s() {
	
}

/* Call global file */
document.write(unescape("%3Cscript src='" + ((denOmn.thisProtocol.indexOf('https')!=-1) ? denOmn.globalSecureUrl : denOmn.globalUrl) + "' type='text/javascript'%3E%3C/script%3E"));
