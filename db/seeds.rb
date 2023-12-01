# In db/seeds.rb

greetings = [
      "Hello, world!",
      "Hi there!",
      "Greetings, fellow human!",
      "Howdy, partner!",
      "Good day to you!"
]

greetings.each do |greeting|
      RandomMessage.create(content: greeting)
end
