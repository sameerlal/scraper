import mechanize 
# uncomment next line
import BeautifulSoup
import urllib


hac = mechanize.Browser()
hac.set_handle_robots(False)
sign_in = hac.open("https://hac.eastpennsd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fHomeAccess%2fClasses%2fClasswork")
hac.select_form(nr = 0)
hac["LogOnDetails.UserName"] = "******"
hac["LogOnDetails.Password"] = "*****"
page = hac.submit()
classwork = page.read()

# uncomment next line
# print logincheck

html = urllib.urlopen(classwork).read()
soup = BeautifulSoup(html)
print soup