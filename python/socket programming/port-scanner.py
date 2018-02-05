import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server = 'hackthissite.org'

def pscan(port):
    try:
        s.connect((server, port))
        return True
    except:
        return False

for port in range(1, 8080):
    if pscan(port):
        print('port', port, 'is open!!!!!!!!!!!!!!!!!!')
    else:
        print('port', port, 'is closed.')