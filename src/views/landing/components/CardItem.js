import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { AccountCircleOutlined, CalendarTodayOutlined, MoreHorizOutlined } from '@mui/icons-material';

// Third party
import moment from 'moment';
import PropTypes from 'prop-types';
import { URL } from 'core/constant';
import toRupiah from 'utils/toRupiah';

// Page
const CardItem = ({ data, handleDelete, handleEdit, handleClick }) => {
    const theme = useTheme();

    const { id, name, Upload, Items, category } = data;

    console.log(data);

    return (
        <Card
            sx={{
                cursor: 'pointer',
                minHeight: 350,
                maxHeight: 400,
                '&:hover': {
                    boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.05)'
                }
            }}
        >
            <CardContent>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    width="200"
                    image={Upload && `${URL}${Upload.path}`}
                    sx={{ mb: 2, borderRadius: 2, objectFit: 'cover' }}
                />
                <Typography gutterBottom sx={{ fontSize: 18, fontWeight: 500 }} component="div">
                    {name}
                </Typography>
                <Typography gutterBottom sx={{ fontSize: 14, fontWeight: 500 }} component="div">
                    {category}
                </Typography>
                <Typography gutterBottom sx={{ fontSize: 14, fontWeight: 400, marginTop: 2 }}>
                    Mulai dari
                </Typography>

                {Items.length > 0 && (
                    <Typography gutterBottom sx={{ fontSize: 18, fontWeight: 500 }}>
                        {toRupiah(Items[0].price, { formal: false, spaceBeforeUnit: true, floatingPoint: 0 })}
                    </Typography>
                )}

                {Items.length === 0 && <Chip label="Belum Tersedia" sx={{ borderRadius: 2, marginTop: 0.5 }} />}

                {/* <Stack direction="row" justifyContent="space-between">
                    <div style={{ display: 'flex', alignItems: 'center', columnGap: 10, marginTop: 24, color: '#9e9e9e' }}>
                        <CalendarTodayOutlined />
                        {moment(createdAt).format('DD MMM YYYY')}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', columnGap: 10, marginTop: 24, color: '#9e9e9e' }}>
                        <AccountCircleOutlined />
                        Oleh Admin
                    </div>
                </Stack> */}
            </CardContent>
            {/* <CardActions>
                <Button
                    variant="outlined"
                    disableElevation
                    fullWidth
                    onClick={handleClick}
                    sx={{
                        border: '1px solid #EAECEE',
                        borderRadius: 32,
                        color: 'black',
                        '&:hover': {
                            color: theme.palette.custom.greenDark,
                            borderColor: theme.palette.custom.greenDark,
                            filter: 'brightness(1.1)'
                        }
                    }}
                >
                    Melihat rincian
                </Button>
                <IconButton aria-label="actions" size="small" onClick={handleClickMore}>
                    <MoreHorizOutlined fontSize="small" />
                </IconButton>
                <Menu
                    id="menu-popular-card"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMore}
                    variant="selectedMenu"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            handleEdit();
                            setAnchorEl(null);
                        }}
                    >
                        Edit
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleDelete();
                            setAnchorEl(null);
                        }}
                    >
                        Delete
                    </MenuItem>
                </Menu>
            </CardActions> */}
        </Card>
    );
};

CardItem.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func,
    handleClick: PropTypes.func,
    handleEdit: PropTypes.func
};
export default CardItem;
