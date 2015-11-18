require 'mechanize'
require 'pp'
m = Mechanize.new()
m.user_agent = "Android"
for i in 0..5
	p = m.get("http://www.freefalltrampolinepark.com/poll/")
	form = p.forms.first
	pp form
	# value: "6" for Emmaus High School
	form.radiobutton_with(value: "8").check
	m.submit(form,form.buttons.last)
	puts "done"
	
end
puts "FINISHED"