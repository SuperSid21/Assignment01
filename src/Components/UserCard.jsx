import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';

const UserCard = ({ user }) => {
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${user.username}`;

  return (
    <Card sx={{ mb: 4, boxShadow: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={avatarUrl}
                alt={user.username}
                sx={{ width: 160, height: 160 ,borderRadius: 0}}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Typography variant="h4" fontWeight="bold">{user.name}</Typography>
            <Typography><b>Email:</b> {user.email}</Typography>
            <Typography><b>Phone:</b> {user.phone}</Typography>
            <Typography><b>Company:</b> {user.company.name}</Typography>
            <Typography><b>Website:</b> {user.website}</Typography>
            <Typography>
              <b>Address:</b> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserCard;
