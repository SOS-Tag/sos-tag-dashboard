const NATIONALITIES = [
  { value: 'AD', text: 'AD - Andorra' },
  { value: 'AE', text: 'AE - United Arab Emirates' },
  { value: 'AF', text: 'AF - Afghanistan' },
  { value: 'AG', text: 'AG - Antigua and Barbuda' },
  { value: 'AI', text: 'AI - Anguilla' },
  { value: 'AL', text: 'AL - Albania' },
  { value: 'AM', text: 'AM - Armenia' },
  { value: 'AO', text: 'AO - Angola' },
  { value: 'AR', text: 'AR - Argentina' },
  { value: 'AS', text: 'AS - American Samoa' },
  { value: 'AT', text: 'AT - Austria' },
  { value: 'AU', text: 'AU - Australia' },
  { value: 'AW', text: 'AW - Aruba' },
  { value: 'AX', text: 'AX - Åland Islands' },
  { value: 'AZ', text: 'AZ - Azerbaijan' },
  { value: 'BA', text: 'BA - Bosnia and Herzegovina' },
  { value: 'BB', text: 'BB - Barbados' },
  { value: 'BD', text: 'BD - Bangladesh' },
  { value: 'BE', text: 'BE - Belgium' },
  { value: 'BF', text: 'BF - Burkina Faso' },
  { value: 'BG', text: 'BG - Bulgaria' },
  { value: 'BH', text: 'BH - Bahrain' },
  { value: 'BI', text: 'BI - Burundi' },
  { value: 'BJ', text: 'BJ - Benin' },
  { value: 'BL', text: 'BL - Saint Barthélemy' },
  { value: 'BM', text: 'BM - Bermuda' },
  { value: 'BN', text: 'BN - Brunei Darussalam' },
  { value: 'BO', text: 'BO - Bolivia (Plurinational State of)' },
  { value: 'BQ', text: 'BQ - Bonaire, Sint Eustatius and Saba' },
  { value: 'BR', text: 'BR - Brazil' },
  { value: 'BS', text: 'BS - Bahamas' },
  { value: 'BT', text: 'BT - Bhutan' },
  { value: 'BV', text: 'BV - Bouvet Island' },
  { value: 'BW', text: 'BW - Botswana' },
  { value: 'BY', text: 'BY - Belarus' },
  { value: 'BZ', text: 'BZ - Belize' },
  { value: 'CA', text: 'CA - Canada' },
  { value: 'CC', text: 'CC - Cocos (Keeling) Islands' },
  { value: 'CD', text: 'CD - Congo, Democratic Republic of the' },
  { value: 'CF', text: 'CF - Central African Republic' },
  { value: 'CG', text: 'CG - Congo' },
  { value: 'CH', text: 'CH - Switzerland' },
  { value: 'CI', text: 'CI - Côte d\'Ivoire' },
  { value: 'CK', text: 'CK - Cook Islands' },
  { value: 'CL', text: 'CL - Chile' },
  { value: 'CM', text: 'CM - Cameroon' },
  { value: 'CN', text: 'CN - China' },
  { value: 'CO', text: 'CO - Colombia' },
  { value: 'CR', text: 'CR - Costa Rica' },
  { value: 'CU', text: 'CU - Cuba' },
  { value: 'CV', text: 'CV - Cabo Verde' },
  { value: 'CW', text: 'CW - Curaçao' },
  { value: 'CX', text: 'CX - Christmas Island' },
  { value: 'CY', text: 'CY - Cyprus' },
  { value: 'CZ', text: 'CZ - Czechia' },
  { value: 'DE', text: 'DE - Germany' },
  { value: 'DJ', text: 'DJ - Djibouti' },
  { value: 'DK', text: 'DK - Denmark' },
  { value: 'DM', text: 'DM - Dominica' },
  { value: 'DO', text: 'DO - Dominican Republic' },
  { value: 'DZ', text: 'DZ - Algeria' },
  { value: 'EC', text: 'EC - Ecuador' },
  { value: 'EE', text: 'EE - Estonia' },
  { value: 'EG', text: 'EG - Egypt' },
  { value: 'EH', text: 'EH - Western Sahara' },
  { value: 'ER', text: 'ER - Eritrea' },
  { value: 'ES', text: 'ES - Spain' },
  { value: 'ET', text: 'ET - Ethiopia' },
  { value: 'FI', text: 'FI - Finland' },
  { value: 'FJ', text: 'FJ - Fiji' },
  { value: 'FK', text: 'FK - Falkland Islands (Malvinas)' },
  { value: 'FM', text: 'FM - Micronesia (Federated States of)' },
  { value: 'FO', text: 'FO - Faroe Islands' },
  { value: 'FR', text: 'FR - France' },
  { value: 'GA', text: 'GA - Gabon' },
  { value: 'GB', text: 'GB - United Kingdom of Great Britain and Northern Ireland' },
  { value: 'GD', text: 'GD - Grenada' },
  { value: 'GE', text: 'GE - Georgia' },
  { value: 'GF', text: 'GF - French Guiana' },
  { value: 'GG', text: 'GG - Guernsey' },
  { value: 'GH', text: 'GH - Ghana' },
  { value: 'GI', text: 'GI - Gibraltar' },
  { value: 'GL', text: 'GL - Greenland' },
  { value: 'GM', text: 'GM - Gambia' },
  { value: 'GN', text: 'GN - Guinea' },
  { value: 'GP', text: 'GP - Guadeloupe' },
  { value: 'GQ', text: 'GQ - Equatorial Guinea' },
  { value: 'GR', text: 'GR - Greece' },
  { value: 'GS', text: 'GS - South Georgia and the South Sandwich Islands' },
  { value: 'GT', text: 'GT - Guatemala' },
  { value: 'GU', text: 'GU - Guam' },
  { value: 'GW', text: 'GW - Guinea-Bissau' },
  { value: 'GY', text: 'GY - Guyana' },
  { value: 'HK', text: 'HK - Hong Kong' },
  { value: 'HM', text: 'HM - Heard Island and McDonald Islands' },
  { value: 'HN', text: 'HN - Honduras' },
  { value: 'HR', text: 'HR - Croatia' },
  { value: 'HT', text: 'HT - Haiti' },
  { value: 'HU', text: 'HU - Hungary' },
  { value: 'ID', text: 'ID - Indonesia' },
  { value: 'IE', text: 'IE - Ireland' },
  { value: 'IL', text: 'IL - Israel' },
  { value: 'IM', text: 'IM - Isle of Man' },
  { value: 'IN', text: 'IN - India' },
  { value: 'IO', text: 'IO - British Indian Ocean Territory' },
  { value: 'IQ', text: 'IQ - Iraq' },
  { value: 'IR', text: 'IR - Iran (Islamic Republic of)' },
  { value: 'IS', text: 'IS - Iceland' },
  { value: 'IT', text: 'IT - Italy' },
  { value: 'JE', text: 'JE - Jersey' },
  { value: 'JM', text: 'JM - Jamaica' },
  { value: 'JO', text: 'JO - Jordan' },
  { value: 'JP', text: 'JP - Japan' },
  { value: 'KE', text: 'KE - Kenya' },
  { value: 'KG', text: 'KG - Kyrgyzstan' },
  { value: 'KH', text: 'KH - Cambodia' },
  { value: 'KI', text: 'KI - Kiribati' },
  { value: 'KM', text: 'KM - Comoros' },
  { value: 'KN', text: 'KN - Saint Kitts and Nevis' },
  { value: 'KP', text: 'KP - Korea (Democratic People\'s Republic of)' },
  { value: 'KR', text: 'KR - Korea, Republic of' },
  { value: 'KW', text: 'KW - Kuwait' },
  { value: 'KY', text: 'KY - Cayman Islands' },
  { value: 'KZ', text: 'KZ - Kazakhstan' },
  { value: 'LA', text: 'LA - Lao People\'s Democratic Republic' },
  { value: 'LB', text: 'LB - Lebanon' },
  { value: 'LC', text: 'LC - Saint Lucia' },
  { value: 'LI', text: 'LI - Liechtenstein' },
  { value: 'LK', text: 'LK - Sri Lanka' },
  { value: 'LR', text: 'LR - Liberia' },
  { value: 'LS', text: 'LS - Lesotho' },
  { value: 'LT', text: 'LT - Lithuania' },
  { value: 'LU', text: 'LU - Luxembourg' },
  { value: 'LV', text: 'LV - Latvia' },
  { value: 'LY', text: 'LY - Libya' },
  { value: 'MA', text: 'MA - Morocco' },
  { value: 'MC', text: 'MC - Monaco' },
  { value: 'MD', text: 'MD - Moldova, Republic of' },
  { value: 'ME', text: 'ME - Montenegro' },
  { value: 'MF', text: 'MF - Saint Martin (French part)' },
  { value: 'MG', text: 'MG - Madagascar' },
  { value: 'MH', text: 'MH - Marshall Islands' },
  { value: 'MK', text: 'MK - North Macedonia' },
  { value: 'ML', text: 'ML - Mali' },
  { value: 'MM', text: 'MM - Myanmar' },
  { value: 'MN', text: 'MN - Mongolia' },
  { value: 'MO', text: 'MO - Macao' },
  { value: 'MP', text: 'MP - Northern Mariana Islands' },
  { value: 'MQ', text: 'MQ - Martinique' },
  { value: 'MR', text: 'MR - Mauritania' },
  { value: 'MS', text: 'MS - Montserrat' },
  { value: 'MT', text: 'MT - Malta' },
  { value: 'MU', text: 'MU - Mauritius' },
  { value: 'MV', text: 'MV - Maldives' },
  { value: 'MW', text: 'MW - Malawi' },
  { value: 'MX', text: 'MX - Mexico' },
  { value: 'MY', text: 'MY - Malaysia' },
  { value: 'MZ', text: 'MZ - Mozambique' },
  { value: 'NA', text: 'NA - Namibia' },
  { value: 'NC', text: 'NC - New Caledonia' },
  { value: 'NE', text: 'NE - Niger' },
  { value: 'NF', text: 'NF - Norfolk Island' },
  { value: 'NG', text: 'NG - Nigeria' },
  { value: 'NI', text: 'NI - Nicaragua' },
  { value: 'NL', text: 'NL - Netherlands' },
  { value: 'NO', text: 'NO - Norway' },
  { value: 'NP', text: 'NP - Nepal' },
  { value: 'NR', text: 'NR - Nauru' },
  { value: 'NU', text: 'NU - Niue' },
  { value: 'NZ', text: 'NZ - New Zealand' },
  { value: 'OM', text: 'OM - Oman' },
  { value: 'PA', text: 'PA - Panama' },
  { value: 'PE', text: 'PE - Peru' },
  { value: 'PF', text: 'PF - French Polynesia' },
  { value: 'PG', text: 'PG - Papua New Guinea' },
  { value: 'PH', text: 'PH - Philippines' },
  { value: 'PK', text: 'PK - Pakistan' },
  { value: 'PL', text: 'PL - Poland' },
  { value: 'PM', text: 'PM - Saint Pierre and Miquelon' },
  { value: 'PN', text: 'PN - Pitcairn' },
  { value: 'PR', text: 'PR - Puerto Rico' },
  { value: 'PS', text: 'PS - Palestine, State of' },
  { value: 'PT', text: 'PT - Portugal' },
  { value: 'PW', text: 'PW - Palau' },
  { value: 'PY', text: 'PY - Paraguay' },
  { value: 'QA', text: 'QA - Qatar' },
  { value: 'RE', text: 'RE - Réunion' },
  { value: 'RO', text: 'RO - Romania' },
  { value: 'RS', text: 'RS - Serbia' },
  { value: 'RU', text: 'RU - Russian Federation' },
  { value: 'RW', text: 'RW - Rwanda' },
  { value: 'SA', text: 'SA - Saudi Arabia' },
  { value: 'SB', text: 'SB - Solomon Islands' },
  { value: 'SC', text: 'SC - Seychelles' },
  { value: 'SD', text: 'SD - Sudan' },
  { value: 'SE', text: 'SE - Sweden' },
  { value: 'SG', text: 'SG - Singapore' },
  { value: 'SH', text: 'SH - Saint Helena, Ascension and Tristan da Cunha' },
  { value: 'SI', text: 'SI - Slovenia' },
  { value: 'SJ', text: 'SJ - Svalbard and Jan Mayen' },
  { value: 'SK', text: 'SK - Slovakia' },
  { value: 'SL', text: 'SL - Sierra Leone' },
  { value: 'SM', text: 'SM - San Marino' },
  { value: 'SN', text: 'SN - Senegal' },
  { value: 'SO', text: 'SO - Somalia' },
  { value: 'SR', text: 'SR - Suriname' },
  { value: 'SS', text: 'SS - South Sudan' },
  { value: 'ST', text: 'ST - Sao Tome and Principe' },
  { value: 'SV', text: 'SV - El Salvador' },
  { value: 'SX', text: 'SX - Sint Maarten (Dutch part)' },
  { value: 'SY', text: 'SY - Syrian Arab Republic' },
  { value: 'SZ', text: 'SZ - Eswatini' },
  { value: 'TC', text: 'TC - Turks and Caicos Islands' },
  { value: 'TD', text: 'TD - Chad' },
  { value: 'TF', text: 'TF - French Southern Territories' },
  { value: 'TG', text: 'TG - Togo' },
  { value: 'TH', text: 'TH - Thailand' },
  { value: 'TJ', text: 'TJ - Tajikistan' },
  { value: 'TK', text: 'TK - Tokelau' },
  { value: 'TL', text: 'TL - Timor-Leste' },
  { value: 'TM', text: 'TM - Turkmenistan' },
  { value: 'TN', text: 'TN - Tunisia' },
  { value: 'TO', text: 'TO - Tonga' },
  { value: 'TR', text: 'TR - Turkey' },
  { value: 'TT', text: 'TT - Trinidad and Tobago' },
  { value: 'TV', text: 'TV - Tuvalu' },
  { value: 'TW', text: 'TW - Taiwan, Province of China' },
  { value: 'TZ', text: 'TZ - Tanzania, United Republic of' },
  { value: 'UA', text: 'UA - Ukraine' },
  { value: 'UG', text: 'UG - Uganda' },
  { value: 'UM', text: 'UM - United States Minor Outlying Islands' },
  { value: 'US', text: 'US - United States of America' },
  { value: 'UY', text: 'UY - Uruguay' },
  { value: 'UZ', text: 'UZ - Uzbekistan' },
  { value: 'VA', text: 'VA - Holy See' },
  { value: 'VC', text: 'VC - Saint Vincent and the Grenadines' },
  { value: 'VE', text: 'VE - Venezuela (Bolivarian Republic of)' },
  { value: 'VG', text: 'VG - Virgin Islands (British)' },
  { value: 'VI', text: 'VI - Virgin Islands (U.S.)' },
  { value: 'VN', text: 'VN - Viet Nam' },
  { value: 'VU', text: 'VU - Vanuatu' },
  { value: 'WF', text: 'WF - Wallis and Futuna' },
  { value: 'WS', text: 'WS - Samoa' },
  { value: 'YE', text: 'YE - Yemen' },
  { value: 'YT', text: 'YT - Mayotte' },
  { value: 'ZA', text: 'ZA - South Africa' },
  { value: 'ZM', text: 'ZM - Zambia' },
  { value: 'ZW', text: 'ZW - Zimbabwe' },
];

export default NATIONALITIES;
