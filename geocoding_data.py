from mapbox import Geocoder
from time import sleep

def main():
    input_filename = 'Hackathon Attempted Abduction Data Set.csv'
    output_filename = 'hackathon_attempted_abduction_data_set_geo.csv'

    input_file = open(input_filename, 'r')
    output_file = open(output_filename, 'w')
    header = input_file.readline()
    header_row = get_output_row(header, 'longitude', 'latitude')
    output_file.write(header_row)

    for line in input_file:
        location_string = get_location_info(line)
        longitude, latitude = get_coordinates_for_location(location_string)
        output = get_output_row(line, longitude, latitude)
        output_file.write(output)

    input_file.close()
    output_file.close()

# gets location info from input row and returns a
# location string with address, city, county, and state
def get_location_info(row):
    data = row.strip().split(',')
    address = data[5]
    city = data[6]
    county = data[9]
    state = data[7]
    return '{} {} {} {}'.format(address, city, county, state)

# formats output row with added coordiate columns
def get_output_row(line, longitude, latitude):
    return ",".join([line.strip(), str(longitude), str(latitude)]) + '\n'

# uses Mapbox's geocoder api to get latitude
# and longitude coordinates from given location
def get_coordinates_for_location(location):
    geocoder = Geocoder()
    response = geocoder.forward(location, country=['us'], limit=1)
    # sleep to avoid api rate limit
    sleep(0.05)
    if response.status_code == 200:
        first = response.geojson()['features'][0]
        coordinates = first['geometry']['coordinates']
        return coordinates
    else:
        return [0, 0]

if __name__ == '__main__':
    main()
