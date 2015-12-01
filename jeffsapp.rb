require 'mechanize'
m = Mechanize.new


for i in 0..10000
	p = m.get("http://www.freefalltrampolinepark.com/poll/")
	form = p.forms.first
	# value: "6" for EHS
	# pp form
	form.radiobutton_with(value: "5").check
	sleep(1)
	form.click_button()
	puts "done " + i.to_s 
end