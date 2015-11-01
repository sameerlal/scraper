import mechanize 

hac = mechanize.Browser()
hac.set_handle_robots(False)
sign_in = hac.open("https://hac.eastpennsd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fHomeAccess%2f")
hac.select_form(nr = 0)
hac["LogOnDetails.UserName"] = "100477"
hac["LogOnDetails.Password"] = "H530VCQ6"
log_in = hac.submit()
logincheck = log_in.read()

