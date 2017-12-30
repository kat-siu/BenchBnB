# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
User.delete_all

Bench.create!(
  description: "It's always clean!",
  lat: 37.754631,
  lng: -122.444132
)

Bench.create!(
  description: "I hate it. There's always poop on the seat.",
  lat: 37.757956,
  lng: -122.441707
)

Bench.create!(
  description: "Great bench with a lovely view.",
  lat: 37.765202,
  lng: -122.439910
)
