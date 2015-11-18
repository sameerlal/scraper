require 'mechanize'
require 'pp'
m = Mechanize.new
p = m.get("http://www.freefalltrampolinepark.com/poll/")
form = p.forms.first
# value: "6" for EHS
pp form
form.radiobutton_with(value: "6").check
sleep(1.0/24.0)
form.submit
