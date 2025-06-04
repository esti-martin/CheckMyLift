<Button 
    variant="btn-princ-s"
    onClick={() => alert('Hola!')}
    type='button'>Botón primario
</Button>

<Button 
    variant="btn-second-s"
    onClick={() => alert('Hola!')}
    type='button'>Botón secundario
</Button>

<Button 
    variant="btn-princ-l"
    onClick={() => alert('Hola!')}
    type='button'>Botón secundario
</Button>

<MobileNavbar />

<WarningMessage type="positive">
</WarningMessage>

<WarningMessage type="negative">
</WarningMessage>

<HeartIcon
active={isActive}
onToggle={() => setIsActive((prev) => !prev)}
/>

<BackButton />

<ElevatorCard
    imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    title="Tarjeta completa"
    description="Esta tarjeta contiene todos los elementos que pediste."
    warningType="negative"
    onPrimaryClick={() => alert("Acción principal")}
    onSecondaryClick={() => alert("Acción secundaria")}
/>