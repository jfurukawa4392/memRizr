require 'sanitize'

def read_cards(file_path)
  output_arr = []

  File.open(file_path, "r") do |f|

    # get each line from file and shovel a question: answer hash into an arry
    f.each_line do |line|
      card = {}
      line = line.split("\t").map { |line| Sanitize.clean(line.chomp) }
      card[line.first] = line.last
      output_arr << card
    end
  end

  output_arr
end
