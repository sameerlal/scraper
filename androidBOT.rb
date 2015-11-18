require 'mechanize'

m = Mechanize.new()
# m.user_agent = "Android"
p = m.get("http://www.freefalltrampolinepark.com/poll/")
form = p.forms.first
radio_button = form.radiobutton_with(value: "6")
radio_button.check
m.submit(form,form.buttons.last)
puts "FINISHED"