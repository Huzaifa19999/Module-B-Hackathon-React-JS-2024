import { Container, Grid } from "@mui/material"
import { useNavigate } from "react-router"
import './home.css'
import HZ_Header from "../../components/HZ_Header"

function Customerhome() {


    const navigate = useNavigate()

  return (
    <>
    <HZ_Header heading="Customer"/>
    <Container maxWidth="xl" sx={{ mt: 15, mb: 5 }}>
          <Grid 
            className="rounded-4 ttt border-5 p-4 justify-content-center"
            container
            rowGap={3}
            spacing={3}
          >
            <Grid
              className="text-center border rounded-2 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              onClick={()=>navigate('/dashboard/customer/availablerooms')}

            >
              <h5 className="mt-3 fw-bold">Available Rooms</h5>
            </Grid>
            <Grid
              className="text-center border rounded-2 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              onClick={()=>navigate('/dashboard/customer/reservation')}

            >
              <h5 className="mt-3 fw-bold">Reservations</h5>
            </Grid>
            <Grid
              className="text-center border rounded-2 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
              onClick={()=>navigate('/dashboard/customer/payment')}

            >
              <h5 className="mt-3 fw-bold">Payment</h5>
              </Grid>
          </Grid>        
        </Container>
    </>
  )
}

export default Customerhome