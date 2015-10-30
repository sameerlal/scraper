import mechanize 

hac = mechanize.Browser()
hac.set_handle_robots(False)
sign_in = hac.open("https://hac.eastpennsd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fHomeAccess%2f")
hac.select_form(nr = 0)
hac["LogOnDetails.UserName"] = "typeusername"
hac["LogOnDetails.Password"] = "typepassword"
log_in = hac.submit()
logincheck = log_in.read()
print logincheck

