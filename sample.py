import requests
from bs4 import BeautifulSoup

page = requests.get("http://xkcd.com/1").content
soup = BeautifulSoup(page)

comicImageBlock = soup.find("div", {"id":"comic"})

comicImageTag = comicImageBlock.find("img")
comicURL = comicImageTag['src']

print comicURL

